import React, { useState } from "react";
import { useSelector } from "react-redux";
const RoomsForm=(props)=>{
    const {formSubmit,_id:id,name:Name,buildingId:BuildingId,handleToggle}=props
    const buildings=useSelector(state=>state.buildings)
    const [name,setname]=useState(Name?Name:'')
    const [buildingId,setbuildingId]=useState(BuildingId?BuildingId:'')
    const reset=()=>{
        setbuildingId('')
        setname('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name,buildingId
        }
        formSubmit(formData,handleToggle,reset,id)
    }
    const handleChange=(e)=>{
        switch(e.target.name){
            case 'name':setname(e.target.value)
            break
            case 'buildingId':setbuildingId(e.target.value)
            break
            default : break
        }
    }
    return(
        <div className="border rounded shadow p-3">
            <form className="form-group row" onSubmit={handleSubmit}> 
            <div className="col-sm-3">
            <input type="text" placeholder="Name" className="form-control" name="name" value={name} onChange={handleChange}/>
            </div>
            
            <div className="col-sm-5" >
                <select name="buildingId"   className="form-control" value={buildingId}  onChange={handleChange}>
                    <option value="" className="dropdown-item">
                       --select building--
                    </option>
                    {
                            buildings.map(build=> <option value={build._id} key={build._id} className="dropdown-item">{build.name}</option> )
                        }
                </select>
            </div>
            <div className="col-sm-3">
            <input type="submit" value="Save" className="btn btn-primary"/>
            </div>
            </form>
        </div>
    )
}
export default RoomsForm