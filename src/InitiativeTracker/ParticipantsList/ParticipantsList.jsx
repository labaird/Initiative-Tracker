import styles from './ParticipantsList.module.css';
import React, {useState} from 'react';
import {useParticipants} from '../useParticipants';
import * as PropTypes from 'prop-types';
import {ParticipantRow} from './ParticipantRow';
import {NextButton} from './NextButton';
//TODO: Should I keep this?
ParticipantRow.propTypes = {
    initiative: PropTypes.any,
    id: PropTypes.any,
    name: PropTypes.any,
    health: PropTypes.any,
    armor: PropTypes.any
};

export function ParticipantsList() {
    const participants = useParticipants();
    const [nextParticipantIndex, setNextParticipantIndex] = useState(0);

    function updateNextParticipant () {
        let newIndex = nextParticipantIndex + 1;

        if (newIndex > participants.length - 1) {
            newIndex = 0;
        }

        setNextParticipantIndex(newIndex);
    }

    return (
        <section className={styles.ParticipantsList}>
            <NextButton updateNextParticipant={updateNextParticipant} />
            <table>
                <thead>
                <tr>
                    <th>Initiative</th>
                    <th>Name</th>
                    <th>Armor</th>
                    <th>Health</th>
                </tr>
                </thead>
                <tbody className={styles.ParticipantsListBody}>
                {participants.map((participant, index) => {
                    const {initiative, name, armor, health, id, saves, status} = participant;
                    let isNext = false;

                    if (index === nextParticipantIndex) {
                        isNext = true;
                    }

                    return (
                        <ParticipantRow initiative={initiative} name={name} armor={armor} health={health} id={id} saves={saves} status={status} isNext={isNext}/>
                    );
                })}
                </tbody>
            </table>
        </section>
    );
}
