import React from 'react';
import {Field} from '../../Field';
import {updateParticipantHealth} from '../../../../../features/participantsSlice';
import {DeathSaveTracker} from './DeathSaveTracker';

export function HealthField(props) {
    const {id, health, isActive, setActiveStatus} = props;

    if (health > 0) {
        return <Field id={id} value={health} updateActionFactory={updateHealthActionFactory}/>;
    }

    return (
        <DeathSaveTracker setActiveStatus={setActiveStatus}/>
    );

}

function updateHealthActionFactory(id, newHealth) {
    let newValue = newHealth;

    if (typeof newHealth === 'string') {
        newValue = parseInt(newHealth, 10);
    }

    return updateParticipantHealth({
        id: id,
        health: newValue,
    });
}