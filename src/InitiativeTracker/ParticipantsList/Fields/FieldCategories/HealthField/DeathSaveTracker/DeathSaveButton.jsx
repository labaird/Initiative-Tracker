import React from 'react';
import styles from './DeathSaveButton.module.css';

export function DeathSaveButton (props) {
    const {isSelected, updateSaves} = props;

    let style = styles.Unselected;

    if (isSelected) {
        style = styles.Selected;
    }

    function handleClick () {
        updateSaves(isSelected);
    }


    return (<button onClick={handleClick} className={style}></button>);
}