import {HorizontalLayout} from '../../../../../../LayoutComponents/HorizontalLayout/HorizontalLayout';
import {DeathSaveButton} from './DeathSaveButton';
import React from 'react';

export function Saves(props) {
    const {type} = props;

    return (
        <HorizontalLayout>
            <header>
                {type === 'successes' ? 'Successes' : 'Failures'}
            </header>
            <DeathSaveButton/>
            <DeathSaveButton/>
            <DeathSaveButton/>
        </HorizontalLayout>);
}