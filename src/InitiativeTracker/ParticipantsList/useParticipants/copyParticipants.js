export function copyParticipants (array) {
    return array.reduce((newArray, participant) => {
        newArray.push({
            ...participant,
        });

        return newArray;
    }, []);
};
