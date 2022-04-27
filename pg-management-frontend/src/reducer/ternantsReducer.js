const ternantsReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETTERNANTSDATA':return [...action.payload]
        case 'REMOVETERNANT':return state.filter(ele=>ele._id!=action.payload)
        case 'ADDTERNANT':return [...state,{...action.payload}]
        case 'EDITTERNANT':return state.map(ternant=>{
            if(ternant._id==action.payload._id){
                return {...action.payload}
            }else{
                return {...ternant}
            }
        }
        )
        default:return state
    }
}
export default ternantsReducer