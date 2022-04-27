const roomsReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETROOMSDATA':return [...action.payload]
        case 'REMOVEROOM': return state.filter(ele=>ele._id!=action.payload)
        case 'ADDROOM': return [...state,{...action.payload}]
        case 'EDITROOM':return state.map(room=>{
            if(room._id==action.payload._id){
                return {...action.payload}
            }else{
                return {...room}
            }
        })
        default:return state
    }
}
export default roomsReducer