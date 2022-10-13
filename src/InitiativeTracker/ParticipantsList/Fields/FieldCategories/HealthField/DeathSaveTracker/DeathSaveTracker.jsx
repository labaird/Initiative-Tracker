import React from 'react';
import {Saves} from './Saves';
import styles from './DeathSaveTracker.module.css';

export function DeathSaveTracker (props) {
    const {setActiveStatus} = props;

    return (
        <div className={styles.DeathSaveTracker}>
            <Saves type="successes" setActiveStatus={setActiveStatus}/>
            <Saves type="failures" setActiveStatus={setActiveStatus} />
        </div>
    );
}