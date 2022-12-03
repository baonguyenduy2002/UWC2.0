import React from "react";
import SearchBar from "../../../../components/SearchBar/index"
import DropDownMenu from "../../../../components/DropDownMenu/index"

import "./Facility.css";

function Facility() {
	return (
		<div className="ManageMcp">
			<div className="MCPList">
				<div className="DropDownMenu"> <DropDownMenu /> </div>
				<div className="SearchBar"> <SearchBar /> </div>
			</div>

		</div>
	)
}

export default Facility;
