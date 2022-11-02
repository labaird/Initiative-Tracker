import {useSelector} from 'react-redux';
import {deepCopyObject} from '../../utils/deepCopyObject';

export function useParticipants() {
    const participants = useSelector(state => state.participants);

    return sortParticipants(participants);
}

const x = 4;

function addOne(value) {

    return value + 1;
}

addOne(x);

function selectParticipant (id) {

    return (state) => {
        const matches = state.participants.filter((participant) => {
            return participant.id === id;
        });

        if (matches.length === 1) {
            return matches[0];
        }

        if (matches.length > 1) {
            throw new Error ('There is more than one participant that matches this id');
        }

        return null;
    }
}

function useParticipant (id) {
    return useSelector(selectParticipant(id));
}

function sortParticipants(participantsArray) {
    return copyParticipants(participantsArray).sort(sortByInitiative);
}

function copyParticipants(array) {
    return array.reduce((newArray, participant) => {

        const newParticipant = deepCopyObject(participant);

        newArray.push(newParticipant);

        return newArray;
    }, []);
}

function sortByInitiative(participant1, participant2) {
    const firstInit = participant1.initiative;
    const secondInit = participant2.initiative;

    if (firstInit > secondInit) {
        return -1;
    }
    if (firstInit < secondInit) {
        return 1;
    }
    return 0;
}
