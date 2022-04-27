import React from "react";
import BuildingsForm from './BuildingsForm'
import { startAddBuilding } from "../../action/buildingsAction";
import { useDispatch } from "react-redux";
const BuildingsAddItem=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData,reset)=>{
        dispatch(startAddBuilding(formData,reset))
    }
    return(
        <div>
            <h2 className="p-3">Add Building</h2>
            <BuildingsForm formSubmit={formSubmit}/>
        </div>
    )
}
export default BuildingsAddItem