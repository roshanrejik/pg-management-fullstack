import React from "react";
import RoomsForm from "./RoomsForm";
import { useDispatch } from "react-redux";
import { startAddRoom } from "../../action/roomsAction";
const RoomsAddItem=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData,reset)=>{
        dispatch(startAddRoom(formData,reset))
    }
    return(
        <div>
            <h2 className="p-3">Add Building</h2>
            <RoomsForm formSubmit={formSubmit}/>
        </div>
    )
}
export default RoomsAddItem