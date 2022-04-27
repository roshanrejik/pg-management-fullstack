import axios from "../config/axios"

export const startGetTernants=()=>{
    return (dispatch)=>{
        axios.get('/ternants')
        .then(res=>{
            const ternants=res.data
            dispatch(setTernants(ternants))
        })
        .catch(err=>console.log(err))
    }
}
export const setTernants=(ternants)=>{
    return{type:'GETTERNANTSDATA',payload:ternants}
}
export const startRemoveTernant=(_id)=>{
    return (dispatch)=>{
        axios.delete(`/ternants/${_id}`)
        .then(res=>{
            const ternant=res.data
            dispatch(RemoveTernant(ternant._id))
        })
        .catch(err=>console.log(err))
    }
}
export const RemoveTernant=(_id)=>{
    return{type:'REMOVETERNANT',payload:_id}
}
export const startAddTernant=(formData,reset)=>{
    return (dispatch)=>{
        axios.post(`/ternants`,formData)
        .then(res=>{
            const ternant=res.data
            dispatch(AddTernant(ternant))
            reset()
        })
        .catch(err=>console.log(err))
    }
}
export const AddTernant=(ternant)=>{
    return{type:'ADDTERNANT',payload:ternant}
}
export const startEditTernant=(formData,handleToggle,reset,id)=>{
    console.log(formData,handleToggle,reset,id);
    return (dispatch)=>{
        axios.put(`/ternants/${id}`,formData)
        .then(res=>{
            const newternant=res.data
            dispatch(EditTernant(newternant))
            //handleToggle()
            reset()
        })
        .catch(err=>console.log(err))
    }
}
export const EditTernant=(newternant)=>{
    return{type:'EDITTERNANT',payload:newternant}
}