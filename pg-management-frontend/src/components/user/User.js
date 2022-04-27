import React from "react";
import { useSelector } from "react-redux";
const UsersContainer = (props) => {
    const user=useSelector((state)=>{
        return state.user
    })
    return (
        <div className="mt-5">
            <h1>Users Information</h1>
            <div>
                <h2>Name : {user.name}</h2>
                <h2>Email : {user.email}</h2>
            </div>
        </div>
    )
}

export default UsersContainer