import styles from "./InitiativeList.module.css";
import React from "react";
import {useSelector} from "react-redux";
import {InitiativeField} from "./InitiativeField/InitiativeField";

export function InitiativeList () {
    const participants = useSelector(state => state.participants);

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

    function copyArray(array) {
        return [...array];
    }

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
                {copyArray(participants).sort(sortByInitiative).map((participant) => {
                    const {initiative, name, armor, health, id} = participant;

                    return (
                        <tr key={id}>
                            <InitiativeField initiative={initiative} index={id}/>
                            <td>{name}</td>
                            <td>{armor}</td>
                            <td>{health}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </section>
    );
}