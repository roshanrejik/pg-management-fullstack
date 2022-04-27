import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {startRemoveRoom} from '../../action/roomsAction'
import RoomsEditItem from "./RoomsEditItem";
const RoomsItem=(props)=>{
    const {room}=props
    const [toggle,setToggle]=useState(false)
    const dispatch=useDispatch()
    const buildings=useSelector(state=>state.buildings)
    const building=buildings.find(build=>build._id==room.buildingId)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return(
        toggle?
        <RoomsEditItem room={room} handleToggle={handleToggle}/>
        :<div className="m-2 p-3 border rounded shadow row">
        <h3 className="d-inline col-sm-3">{room.name}</h3>
        <h3 className="d-inline col-sm-6">{building.name}</h3>
        <button className="btn btn-dark col-sm-1 m-1" onClick={handleToggle}>Edit</button>
        <button className="btn btn-danger col-sm-1 m-1" style={{float:'right'}} onClick={()=>{dispatch(startRemoveRoom(room._id))}}>Delete</button>
    </div>
    )
}
export default RoomsItem