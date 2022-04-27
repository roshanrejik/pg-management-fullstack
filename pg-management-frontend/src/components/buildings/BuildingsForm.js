import React, { useState } from "react";
import { useSelector } from "react-redux";
const BuildingsForm=(props)=>{
    const {formSubmit,_id:id,name:Name,landmark:LandMark,address:Address}=props
    const [name,setName]=useState(Name?Name:'')
    const [landmark,setLandMark]=useState(LandMark?LandMark:'')
    const [address,setAddress]=useState(Address?Address:'')
    const userId=useSelector(state=>state.user._id)
    const handleChange=(e)=>{
        switch(e.target.name){
            case 'name':setName(e.target.value)
            break
            case 'landmark':setLandMark(e.target.value)
            break
            case 'address':setAddress(e.target.value)
            break
            default : break
        }
    }
    const reset=()=>{
        setName('')
        setLandMark('')
        setAddress('')
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name,address,landmark,userId
        }
        formSubmit(formData,id,reset);
    }
    return(
        <div className="border rounded shadow p-3 ">
            <form className="form-group row" onSubmit={handleSubmit}> 
            <div className="col-sm-3">
            <input type="text" placeholder="Name" className="form-control" name="name" value={name} onChange={handleChange}/>
            </div>
            <div className="col-sm-3">
            <input type="text" placeholder="Land Mark" className="form-control"name='landmark' value={landmark} onChange={handleChange}/>
            </div>
            <div className="col-sm-3">
            <input type="text" placeholder="Address" className="form-control" name='address' value={address} onChange={handleChange}/>
            </div>
            <div className="col-sm-3">
            <input type="submit" value="Save" className="btn btn-primary"/>
            </div>
            </form>
        </div>
    )
}
export default BuildingsForm