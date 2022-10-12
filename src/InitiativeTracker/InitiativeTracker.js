import React from 'react';
import styles from './InitiativeTracker.module.css';
import {ParticipantsList} from './ParticipantsList';
import {ParticipantAdder} from './ParticipantAdder';
import {Header} from './Header/Header';
import {ParticipantsHealthModifier} from './ParticipantsHealthModifier/ParticipantsHealthModifier';

export function InitiativeTracker() {

    return (
        <div className={styles.InitiativeTracker}>
            <Header/>
            <ParticipantsList/>
            <ParticipantsHealthModifier />
            <ParticipantAdder/>
        </div>
    );
}

