import React, {useState} from 'react';
import {HorizontalLayout} from '../../../LayoutComponents/HorizontalLayout/HorizontalLayout';
import {useDispatch} from 'react-redux';
import {damageParticipant, healParticipant} from '../../../features/participantsSlice';
import styles from './ModifyHealthField.module.css';

export function ModifyHealthField (props) {
    const {id} = props;
    const [modifyValue, setModifyValue] = useState(0);
    const dispatch = useDispatch();

    function handleChange (event) {
        setModifyValue(event.target.value);
    }

    function handleIncrease () {
        dispatch(increaseHealthActionFactory(id, modifyValue));
        setModifyValue(0)
    }

    function handleDecrease () {
        dispatch(decreaseHealthActionFactory(id, modifyValue));
        setModifyValue(0);
    }

    return (
        <HorizontalLayout>
            <label htmlFor="healthModifier" className={styles.InputLabel}>Amount:</label>
            <input id="healthModifier" className={styles.Input} value={modifyValue} onChange={handleChange}/>
            <HorizontalLayout className={styles.SubmitButtons}>
                <button onClick={handleIncrease}>Add</button>
                <button onClick={handleDecrease}>Remove</button>
            </HorizontalLayout>
        </HorizontalLayout>
    );
}

function increaseHealthActionFactory(id, modifier) {
    let newValue = modifier;

    if (typeof modifier === 'string') {
        newValue = parseInt(modifier, 10);
    }

    return healParticipant({
        id: id,
        modifier: newValue,
    });
}
function decreaseHealthActionFactory(id, modifier) {
    let newValue = modifier;

    if (typeof modifier === 'string') {
        newValue = parseInt(modifier, 10);
    }

    return damageParticipant({
        id: id,
        modifier: newValue,
    });
}
