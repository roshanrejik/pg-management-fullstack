import axios from "../config/axios"

export const startGetRooms=()=>{
    return (dispatch)=>{
        axios.get('/rooms')
        .then(res=>{
            const rooms=res.data
            dispatch(setRooms(rooms))
        })
        .catch(err=>console.log(err))
    }
}
export const setRooms=(rooms)=>{
    return{type:'GETROOMSDATA',payload:rooms}
}
export const startRemoveRoom=(_id)=>{
    return (dispatch)=>{
        axios.delete(`/rooms/${_id}`)
        .then(res=>{
            const room=res.data
            dispatch(RemoveRoom(room._id))
        })
        .catch(err=>console.log(err))
    }
}
export const RemoveRoom=(_id)=>{
    return{type:'REMOVEROOM',payload:_id}
}
export const startAddRoom=(formData,reset)=>{
    return (dispatch)=>{
        axios.post(`/rooms`,formData)
        .then(res=>{
            const room=res.data
            dispatch(AddRoom(room))
            reset()
        })
        .catch(err=>console.log(err))
    }
}
export const AddRoom=(room)=>{
    return{type:'ADDROOM',payload:room}
}
export const startEditRoom=(formData,handleToggle,reset,id)=>{
    return (dispatch)=>{
        axios.put(`/rooms/${id}`,formData)
        .then(res=>{
            const newroom=res.data
            dispatch(EditRoom(newroom))
            handleToggle()
            reset()
        })
        .catch(err=>console.log(err))
    }
}
export const EditRoom=(newroom)=>{
    return{type:'EDITROOM',payload:newroom}
}