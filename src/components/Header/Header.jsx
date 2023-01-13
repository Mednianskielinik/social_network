import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../redux/authReducer";

function Header(props) {
    return (
        <header className={styles.header}>
            <img src='https://planbphoto.com/wp-content/uploads/Serze.jpg'></img>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} | <button onClick={props.logoutUser}>Logout</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
