import React from 'react';
import {Field} from '../Field';
import {updateParticipantArmor} from '../../../../features/participantsSlice';

export function ArmorField(props) {
    const {id, armor} = props;

    return <Field id={id} value={armor} updateActionFactory={updateArmorActionFactory}/>
}

function updateArmorActionFactory(id, newArmor) {
    let newValue = newArmor;

    if (typeof newArmor === 'string') {
        newValue = parseInt(newArmor, 10);
    }

    return updateParticipantArmor({
        id: id,
        armor: newValue,
    });
}
