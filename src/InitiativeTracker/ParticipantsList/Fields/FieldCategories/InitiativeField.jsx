import React from 'react';
import {Field} from '../Field';
import {updateParticipantInitiative} from '../../../../features/participantsSlice';

export function InitiativeField(props) {
    const {initiative, id} = props

    return <Field value={initiative} id={id} updateActionFactory={updateInitiativeActionFactory} isRequired/>
}

function updateInitiativeActionFactory(id, newInitiative) {
    let newValue = newInitiative;

    if (typeof newInitiative === 'string') {
        newValue = parseInt(newInitiative, 10);
    }

    return updateParticipantInitiative({
        id: id,
        initiative: newValue,
    });
}
