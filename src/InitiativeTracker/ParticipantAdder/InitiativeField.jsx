import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateInitiative} from '../../features/addParticipantSlice';
import {HorizontalLayout} from '../../LayoutComponents/HorizontalLayout/HorizontalLayout';

export function InitiativeField() {
    const addParticipantInitiative = useSelector(state => state.addParticipant.initiative);
    const dispatch = useDispatch();

    function handleInitiativeChange(event) {
        dispatch(updateInitiative(event.target.value));
    }

    return (
        <HorizontalLayout>
            <label htmlFor="initiative">Initiative</label>
            <input id="initiative" value={addParticipantInitiative} type="text" onChange={handleInitiativeChange}/>
        </HorizontalLayout>
    );
}