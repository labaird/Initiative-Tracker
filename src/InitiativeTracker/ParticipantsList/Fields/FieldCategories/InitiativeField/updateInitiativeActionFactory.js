import {updateParticipantInitiative} from "../../../../../features/participantsSlice";

export function updateInitiativeActionFactory (id, newValue) {
    return updateParticipantInitiative({
        id: id,
        initiative: newValue,
    });
};
