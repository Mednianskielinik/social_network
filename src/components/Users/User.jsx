import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

function User({user, followingInProgress, unfollow, follow}) {
    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.userPhoto}
                             src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id)
                                              }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                <span><div>{user.name}</div><div>{user.status}</div></span>
                <span><div>{"user.location.country"}</div><div>{"user.location.city"}</div></span>
            </span>
        </div>
    );
}

export default User;