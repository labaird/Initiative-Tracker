import styles from './ParticipantsList.module.css';
import React from 'react';
import {useParticipants} from '../useParticipants';
import * as PropTypes from 'prop-types';
import {ParticipantRow} from './ParticipantRow';
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

    return (
        <section className={styles.ParticipantsList}>
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
                {participants.map((participant) => {
                    const {initiative, name, armor, health, id} = participant;

                    return (
                        <ParticipantRow key={id} initiative={initiative} id={id} name={name} health={health}
                                        armor={armor}/>
                    );
                })}
                </tbody>
            </table>
        </section>
    );
}