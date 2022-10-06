import styles from './Header.module.css';
import logo from '../../dnd-logo-red.png';
import React from 'react';

export function Header() {
    return <header className={styles.Header}>
        <img src={logo} className={styles.AppLogo} alt="logo"/>
        <h2 className={styles.AppLogoSubtitle}>Initiative Tracker</h2>
    </header>;
}