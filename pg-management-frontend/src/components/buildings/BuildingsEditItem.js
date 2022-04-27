import React from "react";
import { useDispatch } from "react-redux";
import { startEditBuilding } from "../../action/buildingsAction";
import BuildingsForm from "./BuildingsForm";
const BuildingsEditItem=(props)=>{
    const dispatch=useDispatch()
    const {handleToggle,build}=props
    console.log(build);
    const formSubmit=(formData,_id,reset)=>{
        dispatch(startEditBuilding(formData,_id,handleToggle))
    }
    return(
        <div className="border rounded shadow p-4">
            <h2 className="p-1">Edit Building</h2>
            <div>
            <div><button className="btn btn-dark mt-3" style={{float:"right"}} onClick={handleToggle}>Cancel</button>
            <BuildingsForm {...build} formSubmit={formSubmit}/>
            </div>
            </div>
        </div>
    )
}
export default BuildingsEditItem