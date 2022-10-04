import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateName} from "../../features/addParticipantSlice";

export function NameField (props) {
    const {onSubmit} = props;
    const {name} = useSelector(state => state.addParticipant);
    const dispatch = useDispatch();

    function handleNameChange (event) {
        dispatch(updateName(event.target.value));
    }

    function handleEnterKey (event) {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={handleNameChange} onKeyDown={handleEnterKey}/>
        </>
    );
}