import styles from './ParticipantsList.module.css';
import {ArmorField, HealthField, InitiativeField, NameField} from './Fields';
import React, {useState} from 'react';

export function ParticipantRow(props) {
    const {id, initiative, name, armor, health} = props;
    const [isActive, setIsActive] = useState(true);

    return <tr>
        <td className={styles.Cell}>
            <InitiativeField initiative={initiative} id={id}/>
        </td>
        <td className={styles.Cell}>
            <NameField name={name} id={id} isActive={isActive}/>
        </td>
        <td className={styles.Cell}>
            <ArmorField armor={armor} id={id}/>
        </td>
        <td className={styles.Cell}>
            <HealthField health={health} id={id} isActive={isActive} setActiveStatus={setIsActive}/>
        </td>
    </tr>;
}