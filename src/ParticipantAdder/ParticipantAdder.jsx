import styles from "./ParticipantAdder.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addParticipant} from "../features/participantsSlice";
import {InitiativeField} from "./InitiativeField";
import {NameField} from "./NameField";
import {ArmorField} from "./ArmorField";
import {HealthField} from "./HealthField";

export function ParticipantAdder () {
    const addParticipantInitiative = useSelector(state => state.addParticipantInitiative);
    const addParticipantName = useSelector(state => state.addParticipantName);
    const addParticipantArmor = useSelector(state => state.addParticipantArmor);
    const addParticipantHealth = useSelector(state => state.addParticipantHealth);

    const dispatch = useDispatch();

    function handleAddParticipantClick (event) {
        dispatch(addParticipant({
            initiative: addParticipantInitiative,
            name: addParticipantName,
            armor: addParticipantArmor,
            health: addParticipantHealth,
        }));
    }

    return (
        <div className={styles.ParticipantAdder}>
            <InitiativeField />
            <NameField />
            <ArmorField />
            <HealthField />
            <button className={styles.button} onClick={handleAddParticipantClick}>Add Participant</button>
        </div>
    );
}