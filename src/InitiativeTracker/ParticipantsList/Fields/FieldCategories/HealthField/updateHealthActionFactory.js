import {updateParticipantHealth} from '../../../../../features/participantsSlice';

export function updateHealthActionFactory(id, newHealth) {
    let newValue = newHealth;

    if (typeof newHealth === 'string') {
        newValue = parseInt(newHealth, 10);
    }

    return updateParticipantHealth({
        id: id,
        health: newValue,
    });
}
