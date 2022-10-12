import {useSelector} from 'react-redux';

export function useParticipants() {
    const participants = useSelector(state => state.participants);

    return sortParticipants(participants);
}

function sortParticipants(participantsArray) {
    return copyParticipants(participantsArray).sort(sortByInitiative);
}

function copyParticipants(array) {
    return array.reduce((newArray, participant) => {
        newArray.push({
            ...participant,
        });

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
