export function sortByInitiative(participant1, participant2) {
    const firstInit = participant1.initiative;
    const secondInit = participant2.initiative;

    if (firstInit > secondInit) {
        return -1;
    }
    if (firstInit < secondInit) {
        return 1;
    }
    return 0;
};
