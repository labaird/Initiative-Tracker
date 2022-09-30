import React from 'react';
import logo from './dnd-logo-red.png';
import './InitiativeTrackerContainer.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addParticipant} from './features/participantsSlice';
import styles from './InitiativeTrackerContainer.module.css';
import {InitiativeList} from "./InitiativeList/InitiativeList";
import {ParticipantAdder} from "./ParticipantAdder/ParticipantAdder";

function InitiativeTrackerContainer() {

    return (
        <div className={styles.InitiativeTrackerContainer}>
            <header className={styles.Header}>
                <img src={logo} className={styles.AppLogo} alt="logo"/>
                <h2 className={styles.AppLogoSubtitle}>Initiative Tracker</h2>
            </header>
            <InitiativeList />
            <ParticipantAdder />
        </div>
    );
}

export default InitiativeTrackerContainer;
