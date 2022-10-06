import {updateParticipantInitiative} from '../../../../../features/participantsSlice';

export function updateInitiativeActionFactory(id, newInitiative) {
    let newValue = newInitiative;

    if (typeof newInitiative === 'string') {
        newValue = parseInt(newInitiative, 10);
    }

    return updateParticipantInitiative({
        id: id,
        initiative: newValue,
    });
}
