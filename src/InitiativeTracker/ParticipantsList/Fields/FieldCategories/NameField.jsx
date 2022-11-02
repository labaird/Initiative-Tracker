import React from 'react';
import {Field} from '../Field';
import {updateParticipantName} from '../../../../features/participantsSlice';

const unconsciousStatus = 'Unconscious';
const unconsciousAndStableStatus = `${unconsciousStatus} and Stable`;
const deadStatus = 'Dead';

export function NameField(props) {
    const {name, id, status} = props;
    let isActive = status === 'alive';
    let inactiveStatus;

    if (status) {
        if (status === 'dead') {
            inactiveStatus = `(${deadStatus})`;
        } else if (status === 'unconscious') {
            inactiveStatus = `(${unconsciousStatus})`;
        } else if (status === 'unconsciousAndStable') {
            inactiveStatus = `(${unconsciousAndStableStatus})`;
        }
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