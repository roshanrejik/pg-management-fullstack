import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const TernantsForm=(props)=>{
    const {formSubmit}=props
    const buildings=useSelector(state=>state.buildings)
    const rooms=useSelector(state=>state.rooms)
    const [name,setname]=useState('')
    const [buildingId,setbuildingId]=useState('')
    const [roomId,setroomId]=useState('')
    const [adhaar,setadhaar]=useState('')
    const [email,setEmail]=useState('')
    const [roomsSorted,setroomsSorted]=useState(rooms)
    const reset=()=>{
        setname('')
        setadhaar('')
        setEmail('')
        setbuildingId('')
        setroomId('')
        setroomsSorted(rooms)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name,adhaar,email,buildingId,roomId
        }
        formSubmit(formData,reset)
    }
    
    const handleChange=(e)=>{
        switch(e.target.name){
            case 'name':setname(e.target.value)
            break
            case 'adhaar':setadhaar(e.target.value)
            break
            case 'email':setEmail(e.target.value)
            break
            case 'buildingId':setbuildingId(e.target.value)
            break
            case 'roomId':setroomId(e.target.value)
            default : break
        }
    }
    useEffect(()=>{
        const temp=rooms.filter(ele=>ele.buildingId==buildingId)
        const res=temp.length>0?temp:rooms
        setroomsSorted(res)
    },[buildingId,rooms])
    useEffect(()=>{
        const temp=rooms.find(ele=>ele._id==roomId)
        const res=temp?temp.buildingId:''
        setbuildingId(res)
    },[roomId])
    return(
        <div className="border rounded shadow p-3">
            <form className="form-group row" onSubmit={handleSubmit}> 
            <div className="col-sm-2">
            <input type="text" placeholder="Name" className="form-control" name="name" value={name} onChange={handleChange}/>
            </div>
            <div className="col-sm-2">
            <input type="text" placeholder="Adhaar" className="form-control" name="adhaar" value={adhaar} onChange={handleChange}/>
            </div>
            <div className="col-sm-3">
            <input type="text" placeholder="Email" className="form-control" name="email" value={email} onChange={handleChange}/>
            </div>
            <div className="col-sm-2" >
                <select name="buildingId"   className="form-control" value={buildingId}  onChange={handleChange}>
                    <option value="" className="dropdown-item">
                       --select building--
                    </option>
                    {
                            buildings.map(build=> <option value={build._id} key={build._id} className="dropdown-item">{build.name}</option> )
                        }
                </select>
            </div>
            <div className="col-sm-2" >
                <select name="roomId"   className="form-control" value={roomId}  onChange={handleChange}>
                    <option value="" className="dropdown-item">
                       --select room--
                    </option>
                    {
                            roomsSorted.map(room=> <option value={room._id} key={room._id} className="dropdown-item">{room.name}</option> )
                        }
                </select>
            </div>
            <div className="col-sm-1">
            <input type="submit" value="Save" className="btn btn-primary"/>
            </div>
            </form>
        </div>
    )
}
export default TernantsForm