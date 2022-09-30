import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateArmor} from "../features/addParticipantArmorSlice";

export function ArmorField () {
    const armor = useSelector(state => state.addParticipantArmor);
    const dispatch = useDispatch();

    function handleChange (event) {
        console.log('event target is', {event: event.target.value});
        dispatch(updateArmor(event.target.value));
    }

    return (
        <label htmlFor="armor">
            Armor
            <input id="armor" type="text" value={armor} onChange={handleChange}/>
        </label>
    );
}