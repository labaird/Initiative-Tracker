import {sortByInitiative} from "./sortByInitiative";
import {copyParticipants} from "./copyParticipants";

export function sortParticipants (participantsArray) {
    return copyParticipants(participantsArray).sort(sortByInitiative);
}
