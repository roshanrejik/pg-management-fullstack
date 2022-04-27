import React from "react";
import TernantsForm from "./TernantsForm";
import {startAddTernant} from '../../action/ternantsAction'
import { useDispatch } from "react-redux";
const TernantsAddItem=(props)=>{
    const dispatch=useDispatch()
    const formSubmit=(formData,reset)=>{
        dispatch(startAddTernant(formData,reset))
    }
    return(
        <div>
            <h2 className="p-3">Add Ternants</h2>
            <TernantsForm formSubmit={formSubmit}/>
        </div>
    )
}
export default TernantsAddItem