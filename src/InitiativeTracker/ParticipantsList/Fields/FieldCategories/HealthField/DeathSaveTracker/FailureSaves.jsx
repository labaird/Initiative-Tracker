import {HorizontalLayout} from '../../../../../../LayoutComponents/HorizontalLayout/HorizontalLayout';
import {DeathSaveButton} from './DeathSaveButton';
import React from 'react';
import {
    deathSaveFailure,
    removeDeathSaveFailure,
} from '../../../../../../features/participantsSlice';
import {useDispatch} from 'react-redux';

const labelFailures = 'Failures';

export function FailureSaves (props) {
    const {id, values} = props;
    const dispatch = useDispatch();

    function isSaveSelected (savePosition) {
        if (savePosition === 1 && values  >= 1) {
            return true;
        }
        if (savePosition === 2 && values >= 2 ) {
            return true;
        }

        if (savePosition === 3 && values >= 3) {
            return true;
        }

        return false;
    }

    function toggleSaves (isSelected) {
        if (!isSelected) {
            dispatch(deathSaveFailureActionFactory(id));
        } else if (isSelected) {
            dispatch(removeDeathSaveFailureActionFactory(id));
        }
    }

    return (
        <HorizontalLayout>
            <header>
                {labelFailures}
            </header>
            <DeathSaveButton isSelected={isSaveSelected(1)} updateSaves={toggleSaves} />
            <DeathSaveButton isSelected={isSaveSelected(2)} updateSaves={toggleSaves} />
            <DeathSaveButton isSelected={isSaveSelected(3)} updateSaves={toggleSaves} />
        </HorizontalLayout>);
}

function deathSaveFailureActionFactory (id) {
    return deathSaveFailure(id);
}

function removeDeathSaveFailureActionFactory (id) {
    return removeDeathSaveFailure(id);
}

