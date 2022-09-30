import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateInitiative} from "../features/addParticipantInitiativeSlice";

export function InitiativeField () {
    const addParticipantInitiative = useSelector(state => state.addParticipantInitiative);
    const dispatch = useDispatch();

    function handleInitiativeChange (event) {
        dispatch(updateInitiative(event.target.value));
    }

    return (
        <label htmlFor="initiative">
            Initiative
            <input id="initiative" value={addParticipantInitiative} type="text" onChange={handleInitiativeChange}/>
        </label>
    );
}