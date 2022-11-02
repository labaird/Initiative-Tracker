import React from 'react';
import {Field} from '../../Field';
import {updateParticipantHealth} from '../../../../../features/participantsSlice';
import {DeathSaveTracker} from './DeathSaveTracker';

export function HealthField(props) {
    const {id, health, saves} = props;

    if (health > 0) {
        return <Field id={id} value={health} updateActionFactory={updateHealthActionFactory} saves={saves}/>;
    }

    return (
        <DeathSaveTracker id={id} saves={saves}/>
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

