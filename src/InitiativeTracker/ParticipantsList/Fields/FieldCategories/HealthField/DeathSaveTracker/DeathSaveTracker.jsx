import React from 'react';
import {SuccessSaves} from './SuccessSaves';
import styles from './DeathSaveTracker.module.css';
import {FailureSaves} from './FailureSaves';

export function DeathSaveTracker (props) {
    const {id, saves} = props;
    const {successes, failures} = saves;

    return (
        <div className={styles.DeathSaveTracker}>
            <SuccessSaves id={id} values={successes} saves={saves} />
            <FailureSaves id={id} values={failures} saves={saves} />
        </div>
    );
}