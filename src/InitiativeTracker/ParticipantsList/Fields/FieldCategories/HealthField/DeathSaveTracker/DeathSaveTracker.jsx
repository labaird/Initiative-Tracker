import React from 'react';
import {Saves} from './Saves';
import styles from './DeathSaveTracker.module.css';

export function DeathSaveTracker () {
    return (
        <div className={styles.DeathSaveTracker}>
            <Saves type="successes" />
            <Saves type="failures" />
        </div>
    );
}