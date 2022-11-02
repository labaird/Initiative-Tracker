import styles from './ParticipantsList.module.css';
import {ArmorField, HealthField, InitiativeField, NameField} from './Fields';
import React from 'react';

export function ParticipantRow(props) {
    const {id, initiative, name, armor, health, saves, status, isNext} = props;

    let rowStyle;

    if (isNext) {
       rowStyle = styles.isSelected;
    }


    return <tr className={rowStyle}>
        <td className={styles.Cell}>
            <InitiativeField initiative={initiative} id={id}/>
        </td>
        <td className={styles.Cell}>
            <NameField name={name} id={id} health={health} status={status}/>
        </td>
        <td className={styles.Cell}>
            <ArmorField armor={armor} id={id}/>
        </td>
        <td className={styles.Cell}>
            <HealthField health={health} id={id} saves={saves}/>
        </td>
    </tr>;
}