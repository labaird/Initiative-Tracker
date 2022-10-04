import styles from "./InitiativeList.module.css";
import React from "react";
import {InitiativeField} from "./Fields/FieldCategories/InitiativeField/InitiativeField";
import {NameField} from "./Fields/FieldCategories/NameField/NameField";
import {ArmorField} from "./Fields/FieldCategories/ArmorField/ArmorField";
import {HealthField} from "./Fields/FieldCategories/HealthField/HealthField";
import {useParticipants} from "./useParticipants/index";

export function ParticipantsList () {
    const participants = useParticipants();

    return (
        <section className={styles.InitiativeList}>
            <table>
                <thead>
                    <tr>
                        <th>Initiative</th>
                        <th>Name</th>
                        <th>Armor</th>
                        <th>Health</th>
                    </tr>
                </thead>
                <tbody className={styles.InitiativeListBody}>
                    {participants.map((participant) => {
                        const {initiative, name, armor, health, id} = participant;

                        return (
                            <tr key={id}>
                                <td className={styles.Column}>
                                    <InitiativeField initiative={initiative} id={id}/>
                                </td>
                                <td className={styles.Column}>
                                    <NameField name={name} id={id}/>
                                </td>
                                <td className={styles.Column}>
                                    <ArmorField armor={armor} id={id}/>
                                </td>
                                <td className={styles.Column}>
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