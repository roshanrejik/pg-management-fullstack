const ternantsReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETTERNANTSDATA':return [...action.payload]
        case 'REMOVETERNANT':return state.filter(ele=>ele._id!=action.payload)
        case 'ADDTERNANT':return [...state,{...action.payload}]
        default:return state
    }
}
export default ternantsReducer