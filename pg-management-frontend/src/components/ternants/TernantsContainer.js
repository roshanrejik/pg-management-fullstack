import React from "react";
import TernantsAddItem from "./TernantsAddItem";
import TernantsList from "./TernantsList";
const TernantsContainer = (props) => {
    return (
        <div>
            <TernantsAddItem/>
            <TernantsList/>
        </div>
    )
}

export default TernantsContainer