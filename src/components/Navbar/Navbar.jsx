import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={'/profile'} className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/dialogs'} className = { navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/news'} className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/users'} className = { navData => navData.isActive ? styles.active : styles.item }>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/settings'}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
