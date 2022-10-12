import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateHealth} from '../../features/addParticipantSlice';
import {HorizontalLayout} from '../../LayoutComponents/HorizontalLayout/HorizontalLayout';

export function HealthField(props) {
    const {onSubmit} = props;
    const health = useSelector(state => state.addParticipant.health);
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(updateHealth(event.target.value));
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <HorizontalLayout>
            <label htmlFor="health">Health</label>
            <input id="health" type="text" value={health} onChange={handleChange} onKeyDown={handleEnterKey}/>
        </HorizontalLayout>
    );
}