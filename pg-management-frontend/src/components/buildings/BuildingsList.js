import React from "react";
import {useSelector} from 'react-redux'
import BuildingsItem from "./BuildingsItem";
const BuildingsList=(props)=>{
    const buildings=useSelector(state=>state.buildings)
    return(
        <div>
            <h2 className="p-3">Listing Buildings - {buildings.length}</h2>
            {
                buildings.map(build=><BuildingsItem key={build._id} build={build}/>)
            }
        </div>
    )
}
export default BuildingsList