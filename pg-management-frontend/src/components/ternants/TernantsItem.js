import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import { startRemoveTernant } from "../../action/ternantsAction";
const TernantsItem=(props)=>{
    const {ternant}=props
    const dispatch=useDispatch()
    const rooms=useSelector(state=>state.rooms)
    const room=rooms.find(room=>room._id==ternant.roomId)
    const buildings=useSelector(state=>state.buildings)
    const building=buildings.find(building=>building._id==ternant.buildingId)
    const shows=()=>{
        Swal.fire(
            `
                Name : ${ternant.name}
                Email : ${ternant.email}
                Adhaar : ${ternant.adhaar}
                Room : ${room.name}
                Building : ${building.name}
            `
        )
    }
    return(
        <div className="m-2 p-3 border rounded shadow row ">
            <h3 className="d-inline col-sm-3">{ternant.name}</h3>
            <h3 className="d-inline col-sm-4">{ternant.email}</h3>
            <button className="btn btn-info col-sm-1 m-1" style={{float:'right'}} onClick={shows}>Show</button>
            <button className="btn btn-danger col-sm-1 m-1" style={{float:'right'}} onClick={()=>{dispatch(startRemoveTernant(ternant._id))}}>Delete</button>
        </div>
    )
}
export default TernantsItem