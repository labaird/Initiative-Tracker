import React from 'react';

export function NextButton (props) {
    const {updateNextParticipant} = props;

    function handleClick () {
        updateNextParticipant();
    }

    return <button onClick={handleClick}>Next</button>;
}