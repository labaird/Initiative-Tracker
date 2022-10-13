import {useParticipants} from '../useParticipants';
import {useState} from 'react';
import {ModifyHealthField} from './ModifyHealthField/ModifyHealthField';
import styles from './ParticipantsHealthModifier.module.css';

export function ParticipantsHealthModifier (props) {
    const participants = useParticipants();
    const [participant, setParticipant] = useState({
        ...participants[0],
    });

    function findParticipant (participants, id) {
        let newId = id;

        if (typeof id === 'string') {
            newId = parseInt(id, 10);
        }

        for (let i = 0; i < participants.length; i = i + 1) {
            if (participants[i].id === newId) {
                return participants[i];
            }
        }

        throw new Error('ParticipantsHealthModifier: Participant does not exist');
    }

    function handleSelection (event) {
        const participant = findParticipant(participants, event.target.value);
        setParticipant({...participant});
    }

    return (
        <div className={styles.ParticipantsHealthModifier}>
            <header>
                Modify Health
            </header>
            <label htmlFor={"participant-select"} style={{display: 'none'}}>Choose a Participant:</label>
            <select name={participant.name} onChange={handleSelection} id={"participant-select"}>
                {participants.map((participant) => {
                    const {name, id} = participant;

                    return <option key={id} value={id}>{name}</option>;
                })}
            </select>
            <ModifyHealthField id={participant.id}/>
        </div>
    );
}