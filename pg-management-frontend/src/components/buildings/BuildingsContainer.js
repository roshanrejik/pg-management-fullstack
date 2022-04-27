import React from "react";
import BuildingsList from "./BuildingsList";
import BuildingsAddItem from "./BuildingsAddItem"
const BuildingsContainer = (props) => {
    return (
        <div>
            <BuildingsAddItem/>
            <BuildingsList/>
        </div>
    )
}

export default BuildingsContainer