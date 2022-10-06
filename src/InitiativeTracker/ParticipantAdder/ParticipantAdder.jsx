import styles from './ParticipantAdder.module.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addParticipant} from '../../features/participantsSlice';
import {InitiativeField} from './InitiativeField';
import {NameField} from './NameField';
import {ArmorField} from './ArmorField';
import {HealthField} from './HealthField';
import {resetParticipant} from '../../features/addParticipantSlice';
import {HorizontalContainer} from '../../LayoutComponents/HorizontalContainer/HorizontalContainer';

export function ParticipantAdder() {
    const {initiative, name, armor, health} = useSelector(state => state.addParticipant);
    const dispatch = useDispatch();

    function handleAddParticipantSubmit(event) {
        const isInputValid = initiative.trim() && name.trim();

        if (isInputValid) {
            dispatch(addParticipant({
                initiative: initiative,
                name: name,
                armor: armor,
                health: health,
            }));

            dispatch(resetParticipant());
        }
    }

    return (
        <div className={styles.ParticipantAdder}>
            <HorizontalContainer>
                <InitiativeField/>
                <NameField onSubmit={handleAddParticipantSubmit}/>
                <ArmorField onSubmit={handleAddParticipantSubmit}/>
                <HealthField onSubmit={handleAddParticipantSubmit}/>
                <button className={styles.button} onClick={handleAddParticipantSubmit}>Add Participant</button>
            </HorizontalContainer>
        </div>
    );
}