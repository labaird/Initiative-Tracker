import {HorizontalLayout} from '../../../../../../LayoutComponents/HorizontalLayout/HorizontalLayout';
import {DeathSaveButton} from './DeathSaveButton';
import React from 'react';

export function Saves(props) {
    const {type, setActiveStatus} = props;

    return (
        <HorizontalLayout>
            <header>
                {type === 'successes' ? 'Successes' : 'Failures'}
            </header>
            <DeathSaveButton setActiveStatus={setActiveStatus}/>
            <DeathSaveButton setActiveStatus={setActiveStatus}/>
            <DeathSaveButton setActiveStatus={setActiveStatus}/>
        </HorizontalLayout>);
}