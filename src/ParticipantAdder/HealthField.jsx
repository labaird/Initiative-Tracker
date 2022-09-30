import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateHealth} from "../features/addParticipantHealthSlice";

export function HealthField () {
    const health = useSelector(state => state.addParticipantHealth);
    const dispatch = useDispatch();

    function handleChange (event) {
        dispatch(updateHealth(event.target.value));
    }

    return (
        <label htmlFor="health">
            Health
            <input id="health" type="text" value={health} onChange={handleChange}/>
        </label>
    );
}