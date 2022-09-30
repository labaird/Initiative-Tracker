import React, {useState} from "react";
import styles from './InitiativeEditor.module.css';
import {useDispatch} from "react-redux";
import {updateParticipantInitiative} from "../../features/participantsSlice";

export function InitiativeEditor (props) {
    const {initiative, toggleEditor, index} = props;

    const [inputInitiative, setInputInitiative] = useState(initiative);

    const dispatch = useDispatch();

    function handleChange (event) {
        setInputInitiative(event.target.value);
    }

    function handleClick () {
        dispatch(updateParticipantInitiative({
            index: index,
            initiative: inputInitiative,
        }));
        toggleEditor();
    }

    return (
        <td className={styles.Column}>
            <input className={styles.Input} type='text' value={inputInitiative} onChange={handleChange}/>
            <button onClick={handleClick}>
                Done
            </button>
        </td>
    );
}