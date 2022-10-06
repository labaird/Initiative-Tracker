import React from 'react';
import styles from './InitiativeTracker.module.css';
import {ParticipantsList} from './ParticipantsList';
import {ParticipantAdder} from './ParticipantAdder/ParticipantAdder';
import {Header} from './Header/Header';

export function InitiativeTracker() {

    return (
        <div className={styles.InitiativeTracker}>
            <Header/>
            <ParticipantsList/>
            <ParticipantAdder/>
        </div>
    );
}

