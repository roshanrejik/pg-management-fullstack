import axios from "../config/axios"

export const startGetBuildings=()=>{
    return (dispatch)=>{
        axios.get('/buildings')
        .then(res=>{
            const buildings=res.data
            dispatch(setBuildings(buildings))
        })
        .catch(err=>console.log(err))
    }
}
export const setBuildings=(buildings)=>{
    return{type:'GETBUILDINGSDATA',payload:buildings}
}
export const startRemoveBuilding=(_id)=>{
    return (dispatch)=>{
        axios.delete(`/buildings/${_id}`)
        .then(res=>{
            const building=res.data
            dispatch(RemoveBuilding(building._id))
        })
        .catch(err=>console.log(err))
    }
}
export const RemoveBuilding=(_id)=>{
    return{type:'REMOVEBUILDINIG',payload:_id}
}
export const startAddBuilding=(formData,reset)=>{
    return (dispatch)=>{
        axios.post(`/buildings`,formData)
        .then(res=>{
            const building=res.data
            dispatch(AddBuilding(building))
            reset()
        })
        .catch(err=>console.log(err))
    }
}
export const AddBuilding=(building)=>{
    return{type:'ADDBUILDINIG',payload:building}
}