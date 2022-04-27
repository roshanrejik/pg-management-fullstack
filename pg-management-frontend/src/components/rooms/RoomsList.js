import React, { useState } from "react";
import {useSelector} from 'react-redux'
import RoomsItem from "./RoomsItem";
const RoomsList=(props)=>{
    const rooms=useSelector(state=>state.rooms)
    const buildings=useSelector(state=>state.buildings)
    const [buildingId,setBuildingId]=useState('')
    const handleChange=(e)=>{
        setBuildingId(e.target.value)
    }
    return(
        <div>
            <h2 className="p-3">Listing Rooms - {rooms.length}  <div className="col-sm-5 d-inline" style={{float:"right"}}  >
                <select name="buildingId"   className="form-control d-inline" value={buildingId}  onChange={handleChange}>
                    <option value="" className="dropdown-item">
                       --select building--
                    </option>
                    {
                            buildings.map(build=> <option value={build._id} key={build._id} className="dropdown-item">{build.name}</option> )
                        }
                </select>
            </div></h2>
            {
                rooms.filter(room=>room.buildingId.includes(buildingId)).map(room=><RoomsItem key={room._id} room={room}/>)
            }
        </div>
    )
}
export default RoomsList