import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styles from './FieldEditor.module.css';

export function Editor(props) {
    const {value, onSave, id, updateActionFactory, isRequired} = props;

    const [inputValue, setInputValue] = useState(value + '');

    const dispatch = useDispatch();

    function handleChange(event) {
        console.log("change is", typeof event.target.value);
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (!isRequired || (isRequired && inputValue.trim())) {
            if (inputValue !== (value + '')) {
                dispatch(updateActionFactory(id, inputValue));
            }
            onSave();
        }
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className={styles.Field}>
            <input className={styles.Input} type="text" value={inputValue} onChange={handleChange}
                   onKeyDown={handleEnterKey}/>
            <button onClick={handleSubmit}>
                OK
            </button>
        </div>
    );
}