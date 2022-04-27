import {createStore,combineReducers, applyMiddleware} from 'redux'
import buildingReducer from '../reducer/buildingReducer'
import roomsReducer from '../reducer/roomsReducer'
import ternantsReducer from '../reducer/ternantsReducer'
import userReducer from '../reducer/userReducer'
import thunk from 'redux-thunk'
const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        buildings:buildingReducer,
        rooms:roomsReducer,
        ternants:ternantsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore