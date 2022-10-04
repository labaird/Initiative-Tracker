import {updateParticipantName} from "../../../../../features/participantsSlice";

export function updateNameActionFactory(id, newName) {
    const action = updateParticipantName({
        id: id,
        name: newName,
    });

    console.log('updateParticipantName returns', action);
    return action;
};
