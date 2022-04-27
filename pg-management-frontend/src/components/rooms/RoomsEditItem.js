import React from "react";
import { useDispatch } from "react-redux";
import {startEditRoom} from '../../action/roomsAction'
import RoomsForm from './RoomsForm'
const RoomsEditItem=(props)=>{
    const dispatch=useDispatch()
    const {room,handleToggle}=props
    const formSubmit=(formData,handleToggle,reset,id)=>{
        dispatch(startEditRoom(formData,handleToggle,reset,id))
    }
    return(
        <div>
            <h2 className="p-3">Edit Room</h2>
            <button className="btn btn-dark mt-3" style={{float:"right"}} onClick={handleToggle}>Cancel</button>
            <RoomsForm {...room} handleToggle={handleToggle} formSubmit={formSubmit}/>

        </div>
    )
}
export default RoomsEditItem