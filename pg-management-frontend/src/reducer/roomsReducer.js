const roomsReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETROOMSDATA':return [...action.payload]
        case 'REMOVEROOM': return state.filter(ele=>ele._id!=action.payload)
        case 'ADDROOM': return [...state,{...action.payload}]
        default:return state
    }
}
export default roomsReducer