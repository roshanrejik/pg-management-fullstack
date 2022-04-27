const userReducer=(state={},action)=>{
    switch(action.type){
        case 'GETUSERDATA':return {...action.payload}
        default:return state
    }
}
export default userReducer