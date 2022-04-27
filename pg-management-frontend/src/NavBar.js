import React,{useEffect} from "react";
import {Link,Route} from 'react-router-dom'
import BuildingsContainer from './components/buildings/BuildingsContainer'
import RoomsContainer from "./components/rooms/RoomsContainer";
import TernantsContainer from "./components/ternants/TernantsContainer";
import UsersContainer from "./components/user/User";
import {startGetUser} from '../src/action/userAction'
import {startGetBuildings} from '../src/action/buildingsAction'
import { startGetRooms } from "./action/roomsAction";
import { useDispatch } from "react-redux";
import { startGetTernants } from "./action/ternantsAction";

const NavBar=(props)=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(startGetUser())
        dispatch(startGetBuildings())
        dispatch(startGetRooms())
        dispatch(startGetTernants())
    },[])
    return(
        <div>
            <div className="border rounded shadow p-2 sticky-top" style={{background:'white'}}>
                <Link to='/buildings'><button className="btn btn-dark m-1">Buildings</button></Link>
                <Link to='/rooms'><button className="btn btn-dark m-1">Rooms</button></Link>
                <Link to='/ternants'><button className="btn btn-dark m-1">Ternants</button></Link>
                <Link to='/'><button className="btn btn-dark m-1" style={{'float':'right'}}>User</button></Link>
            </div>
            <Route path='/buildings' component={BuildingsContainer} exact={true}/>
            <Route path='/rooms' component={RoomsContainer} exact={true}/>
            <Route path='/ternants' component={TernantsContainer} exact={true}/>
            <Route path='/' component={UsersContainer} exact={true}/>
       </div>
    )
}
export default NavBar