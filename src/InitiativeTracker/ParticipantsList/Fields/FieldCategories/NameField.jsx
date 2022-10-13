import React from 'react';
import {Field} from '../Field';
import {updateParticipantName} from '../../../../features/participantsSlice';

export function NameField(props) {
    const {name, id, isActive} = props;
    let inactiveStatus;

    if (!isActive) {
        inactiveStatus = '(Unconscious)';
    }

    return (
        <>
            <Field value={name} id={id} updateActionFactory={updateNameActionFactory} isRequired/>
            {!isActive && inactiveStatus}
        </>
    );
}

function updateNameActionFactory(id, newName) {
    return updateParticipantName({
        id: id,
        name: newName,
    });
}