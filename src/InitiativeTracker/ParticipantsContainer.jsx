import React from 'react';
import {useParticipants} from './useParticipants';

export function ParticipantsContainer (props) {
    const {children} = props;
    const participants = useParticipants();

    return (
        <>
            {children.map((child, i) => {
                return <div key={i}>
                    {React.cloneElement(child, participants)}
                </div>
            })}
        </>
    );
}