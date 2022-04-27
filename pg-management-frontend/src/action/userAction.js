import axios from "../config/axios"

export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('/users')
        .then(res=>{
            const user=res.data
            dispatch(setUser(user[0]))
        })
        .catch(err=>console.log(err))
    }
}
export const setUser=(user)=>{
    return{type:'GETUSERDATA',payload:user}
}