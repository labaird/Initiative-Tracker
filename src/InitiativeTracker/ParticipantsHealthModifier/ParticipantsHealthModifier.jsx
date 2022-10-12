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
            if (participants[i][newId] === id) {
                return participants[i];
            }
        }
    }

    function handleSelection (event) {
        const participant = findParticipant(event.target.value);

        setParticipant({...participant});
    }

    return (
        <div className={styles.ParticipantsHealthModifier}>
            <header>
                Modify Health
            </header>
            <select value={participant.name} onChange={handleSelection}>
                {participants.map((participant) => {
                    const {name, id} = participant;

                    return <option key={id} value={id}>{name}</option>
                })}
            </select>
            <ModifyHealthField id={participant.id}/>
        </div>
    );
}