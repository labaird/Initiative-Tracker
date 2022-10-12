import React, {useState} from 'react';
import styles from './DeathSaveButton.module.css';

export function DeathSaveButton () {
    const [isSelected, setIsSelected] = useState(false);
    let style = styles.Unselected;

    if (isSelected) {
        style = styles.Selected;
    }

    function toggleSelection () {
        setIsSelected(!isSelected);
    }

    return (<button onClick={toggleSelection} className={style}></button>);
}