import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateArmor} from '../../../features/addParticipantSlice';
import {HorizontalLayout} from '../../../LayoutComponents/HorizontalLayout/HorizontalLayout';

export function ArmorField(props) {
    const {onSubmit} = props;
    const armor = useSelector(state => state.addParticipant.armor);
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(updateArmor(event.target.value));
    }

    function handleEnterKey(event) {
        if (event.key === 'Enter') {
            onSubmit();
        }
    }

    return (
        <HorizontalLayout>
            <label htmlFor="armor">Armor</label>
            <input id="armor" type="text" value={armor} onChange={handleChange} onKeyDown={handleEnterKey}/>
        </HorizontalLayout>
    );
}