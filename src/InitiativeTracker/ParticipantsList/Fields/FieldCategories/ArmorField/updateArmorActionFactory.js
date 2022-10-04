import {updateParticipantArmor} from "../../../../../features/participantsSlice";

export function updateArmorActionFactory (id, newArmor) {
    return updateParticipantArmor({
        id: id,
        armor: newArmor
    });
};
