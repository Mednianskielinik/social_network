import React from 'react';
import styles from './../DialogList.module.css';
import { NavLink } from "react-router-dom";

function DialogItem(props) {
    let path = 'dialogs/' + props.id;
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
