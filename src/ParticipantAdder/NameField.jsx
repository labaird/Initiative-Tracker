import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateName} from "../features/addParticipantNameSlice";

export function NameField () {
    const addParticipantName = useSelector(state => state.addParticipantName);
    const dispatch = useDispatch();

    function handleNameChange (event) {
        dispatch(updateName(event.target.value));
    }

    return (
        <label htmlFor="name">
            Name
            <input id="name" type="text" value={addParticipantName} onChange={handleNameChange}/>
        </label>
    );
}