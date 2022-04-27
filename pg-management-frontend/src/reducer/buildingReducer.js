const buildingReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETBUILDINGSDATA':return [...action.payload]
        case 'REMOVEBUILDINIG': return state.filter(ele=>ele._id!=action.payload)
        case 'ADDBUILDINIG':return [...state,{...action.payload}]
        default:return state
    }
}
export default buildingReducer