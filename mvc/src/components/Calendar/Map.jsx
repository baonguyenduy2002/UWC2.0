import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css"

mapboxgl.accessToken = "pk.eyJ1IjoiaG9hbmd0cmFuMTI5MDIiLCJhIjoiY2xiN3k0cmN4MGR3dTN2cGtvaDQ0aXVoMyJ9.6_LPHRArF4w86m55gFlRcA"


export default function Mapbox() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(106.6576154187682);
    const [lat, setLat] = useState(10.772836493340273);
    const [zoom, setZoom] = useState(16);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <div className = "MapField">
            <div ref={mapContainer} className="MapContainer" />
        </div>
    );
}