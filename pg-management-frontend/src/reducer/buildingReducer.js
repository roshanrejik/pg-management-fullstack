const buildingReducer=(state=[],action)=>{
    switch(action.type){
        case 'GETBUILDINGSDATA':return [...action.payload]
        case 'REMOVEBUILDINIG': return state.filter(ele=>ele._id!=action.payload)
        case 'ADDBUILDINIG':return [...state,{...action.payload}]
        case 'EDITBUILDINIG':return state.map(build=>{
            if(build._id==action.payload._id){
                return {...action.payload}
            }else{
                return {...build}
            }
        })
        default:return state
    }
}
export default buildingReducer