import React from "react";
import RoomsAddItem from "./RoomsAddItem";
import RoomsList from "./RoomsList";
const RoomsContainer = (props) => {
    return (
        <div>
            <RoomsAddItem/>
            <RoomsList/>
        </div>
    )
}

export default RoomsContainer