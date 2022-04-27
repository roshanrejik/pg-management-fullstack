import React, { useState } from "react";
import {useSelector} from 'react-redux'
import TernantsItem from "./TernantsItem";
const TernantsList=(props)=>{
    const ternants=useSelector(state=>state.ternants)
    const rooms=useSelector(state=>state.rooms)
    const [roomId,setRoomId]=useState('')
    const handleChange=(e)=>{
        setRoomId(e.target.value)
    }
    return(
        <div>
            <h2 className="p-3">Listing Ternants - { ternants.filter(ternant=>ternant.roomId.includes(roomId)).length}
            <select name="buildingId"   className="form-control d-inline" style={{width:'30%',float:'right'}} value={roomId}  onChange={handleChange}>
                    <option value="" className="dropdown-item">
                       --select room--
                    </option>
                    {
                            rooms.map(room=> <option value={room._id} key={room._id} className="dropdown-item">{room.name}</option> )
                        }
                </select>
            </h2>    
            {
                ternants.filter(ternant=>ternant.roomId.includes(roomId)).map(ternant=><TernantsItem key={ternant._id} ternant={ternant}/>)
            }
        </div>
    )
}
export default TernantsList