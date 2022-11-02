import {HorizontalLayout} from '../../../../../../LayoutComponents/HorizontalLayout/HorizontalLayout';
import {DeathSaveButton} from './DeathSaveButton';
import React from 'react';
import {
    deathSaveSuccess,
    removeDeathSaveSuccess,
} from '../../../../../../features/participantsSlice';
import {useDispatch} from 'react-redux';

const labelSuccesses = 'Successes';

export function SuccessSaves(props) {
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
            dispatch(deathSaveSuccessActionFactory(id));
        } else if (isSelected) {
            dispatch(removeDeathSaveSuccessActionFactory(id));
        }
    }

    return (
        <HorizontalLayout>
            <header>
                {labelSuccesses}
            </header>
                <DeathSaveButton isSelected={isSaveSelected(1)} updateSaves={toggleSaves} />
                <DeathSaveButton isSelected={isSaveSelected(2)} updateSaves={toggleSaves} />
                <DeathSaveButton isSelected={isSaveSelected(3)} updateSaves={toggleSaves} />
        </HorizontalLayout>);
}

function deathSaveSuccessActionFactory (id) {
    return deathSaveSuccess(id);
}

function removeDeathSaveSuccessActionFactory (id) {
    return removeDeathSaveSuccess(id);
}
