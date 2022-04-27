import React, { useState } from "react";
import { startRemoveBuilding } from "../../action/buildingsAction";
import { useDispatch} from 'react-redux'
import BuildingsEditItem from "./BuildingsEditItem";
import Swal from 'sweetalert2'
const BuildingsItem=(props)=>{
    const {build}=props
    const dispatch=useDispatch()
    const [toggle,setToggle]=useState(false)
    const shows=()=>{
        Swal.fire(
            `
                Name : ${build.name}
                LandMark : ${build.landmark}
                Address : ${build.address}
            `
        )
    }
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return(
        toggle?
            <BuildingsEditItem handleToggle={handleToggle} build={build}/>
        :
            <div className="m-2 p-3 border rounded shadow row">
            <h3 className="d-inline col-sm-3">{build.name}</h3>
            <h3 className="d-inline col-sm-3">{build.landmark}</h3>
            <h3 className="d-inline col-sm-2">{build.address}</h3>
            <button className="btn btn-dark m-1 col-sm-1" style={{float:'right'}} onClick={handleToggle}>Edit</button>
            <button className="btn btn-info m-1 col-sm-1" style={{float:'right'}} onClick={shows}>Show</button>
            <button className="btn btn-danger m-1 col-sm-1" style={{float:'right'}} onClick={()=>{dispatch(startRemoveBuilding(build._id))}}>Delete</button>
        </div>
        
    )
}
export default BuildingsItem