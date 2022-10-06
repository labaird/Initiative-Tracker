import styles from './ParticipantsList.module.css';
import React from 'react';
import {InitiativeField} from './Fields/FieldCategories/InitiativeField/InitiativeField';
import {NameField} from './Fields/FieldCategories/NameField/NameField';
import {ArmorField} from './Fields';
import {HealthField} from './Fields/FieldCategories/HealthField/HealthField';
import {useParticipants} from './useParticipants';

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
                        <tr key={id}>
                            <td className={styles.Cell}>
                                <InitiativeField initiative={initiative} id={id}/>
                            </td>
                            <td className={styles.Cell}>
                                <NameField name={name} id={id}/>
                            </td>
                            <td className={styles.Cell}>
                                <ArmorField armor={armor} id={id}/>
                            </td>
                            <td className={styles.Cell}>
                                <HealthField health={health} id={id}/>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </section>
    );
}