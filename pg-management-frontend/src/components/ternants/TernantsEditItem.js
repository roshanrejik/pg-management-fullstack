 import React from 'react'
import { useDispatch } from 'react-redux'
 import TernantsForm from './TernantsForm'
 import {startEditTernant} from '../../action/ternantsAction'
 const TernantsEditItem=(props)=>{
     const dispatch=useDispatch()
     const {handleToggle,ternant}=props
     const formSubmit=(formData,reset,handleToggle,id)=>{
        dispatch(startEditTernant(formData,reset,handleToggle,id))
    }
     return(
         <div>
            <h2 className="p-3">Edit Ternants</h2>
            <button className="btn btn-dark mt-3" style={{float:"right"}} onClick={handleToggle}>Cancel</button>
            <TernantsForm handleToggle={handleToggle} formSubmit={formSubmit} {...ternant}/>
         </div>
     )
 }
 export default TernantsEditItem