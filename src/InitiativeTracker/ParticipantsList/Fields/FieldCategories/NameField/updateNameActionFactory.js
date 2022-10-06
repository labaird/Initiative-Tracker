import {updateParticipantName} from '../../../../../features/participantsSlice';

export function updateNameActionFactory(id, newName) {
    return updateParticipantName({
        id: id,
        name: newName,
    });
}

