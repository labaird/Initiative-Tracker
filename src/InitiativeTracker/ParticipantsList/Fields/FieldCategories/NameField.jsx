import React from 'react';
import {Field} from '../Field';
import {updateParticipantName} from '../../../../features/participantsSlice';

export function NameField(props) {
    const {name, id} = props;

    return <Field value={name} id={id} updateActionFactory={updateNameActionFactory} isRequired/>
}

function updateNameActionFactory(id, newName) {
    return updateParticipantName({
        id: id,
        name: newName,
    });
}