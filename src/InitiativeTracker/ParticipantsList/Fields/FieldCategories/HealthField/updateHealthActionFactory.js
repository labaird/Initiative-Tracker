import {updateParticipantHealth} from "../../../../../features/participantsSlice";

export function updateHealthActionFactory(id, newHealth) {
    return updateParticipantHealth({
        id: id,
        health: newHealth,
    });
};
