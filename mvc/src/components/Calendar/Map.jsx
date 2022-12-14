import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
	"pk.eyJ1IjoiaG9hbmd0cmFuMTI5MDIiLCJhIjoiY2xiY3NqcDIzMHZ5bzNvbW1kZ2tnN2JuMCJ9.DYHMfFtCVNLT-MW4G97Jqw";

export default function Mapbox(props) {
	const { type, mcpIdList } = props;
	const start = [106.65790455022298, 10.772417577847966];
	const end = [106.66834613614918, 10.761182298189327];
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(start[0]);
	const [lat, setLat] = useState(start[1]);
	const [zoom, setZoom] = useState(15);

	const mcpList = [
		{
			id: 1,
			name: "MCP1",
			location: [106.66834613614918, 10.761182298189327],
		},
		{
			id: 2,
			name: "MCP2",
			location: [106.65729322126603, 10.778982831432488],
		},
		{
			id: 3,
			name: "MCP3",
			location: [106.6556109593722, 10.776522730818737],
		},
		{
			id: 4,
			name: "MCP4",
			location: [106.65537548638767, 10.771111538128144],
		},
		{
			id: 5,
			name: "MCP5",
			location: [106.66501025838254, 10.76936501088457],
		},
		{
			id: 6,
			name: "MCP6",
			location: [106.66341599522043, 10.764490716818997],
		},
		{
			id: 7,
			name: "MCP7",
			location: [106.66198624424055, 10.760214024328812],
		},
		{
			id: 8,
			name: "MCP8",
			location: [106.66578722446715, 10.763279139136666],
		},
		{
			id: 9,
			name: "MCP9",
			location: [106.66785801279613, 10.76370242355939],
		},
	];

	// let useMCP = mcpIdList.length > 0 ? (
	//     mcpIdlist.map((mcpId) => {mcpList.map((mcp) => {mcpId == mcp.id ? mcp : useMCP})})
	// ) : []

	const useMCP = mcpList;

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: [lng, lat],
			zoom: zoom,
		});
	});

	async function getRoute() {
		// make a directions request using cycling profile
		// an arbitrary start will always be the same
		// only the end or destination will change
		let coorString = "";
		useMCP.map((mcp) => {
			coorString +=
				mcp.location[0].toString() + "," + mcp.location[1].toString() + ";";
		});
		coorString = coorString.slice(0, -1);
		const query = await fetch(
			`https://api.mapbox.com/directions/v5/mapbox/driving/${coorString}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
			{ method: "GET" }
		);
		const json = await query.json();
		const data = json.routes[0];
		const route = data.geometry.coordinates;
		const geojson = {
			type: "Feature",
			properties: {},
			geometry: {
				type: "LineString",
				coordinates: route,
			},
		};
		// if the route already exists on the map, we'll reset it using setData
		if (map.current.getSource("route")) {
			map.current.getSource("route").setData(geojson);
		}
		// otherwise, we'll make a new request
		else {
			map.current.addLayer({
				id: "route",
				type: "line",
				source: {
					type: "geojson",
					data: geojson,
				},
				layout: {
					"line-join": "round",
					"line-cap": "round",
				},
				paint: {
					"line-color": "#3887be",
					"line-width": 5,
					"line-opacity": 0.75,
				},
			});
		}
		// add turn instructions here at the end
	}

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on("load", () => {
			// make an initial directions request that
			// starts and ends at the same location
			if (type === "task" || type === "vehicle") getRoute();

			//Add starting point to the map
			// map.current.addLayer({
			//     id: 'point',
			//     type: 'circle',
			//     source: {
			//         type: 'geojson',
			//         data: {
			//             type: 'FeatureCollection',
			//             features: [
			//                 {
			//                     type: 'Feature',
			//                     properties: {},
			//                     geometry: {
			//                         type: 'Point',
			//                         coordinates: start
			//                     }
			//                 }
			//             ]
			//         }
			//     },
			//     paint: {
			//         'circle-radius': 10,
			//         'circle-color': '#3887be'
			//     }
			// });
		});
	});

	return (
		<div>
			<div
				ref={mapContainer}
				className={
					(type === "dashboard" && "MapContainerDashboard") ||
					(type === "task" && "MapContainerTask") ||
					"MapContainerVehicle"
				}
			/>
		</div>
	);
}
