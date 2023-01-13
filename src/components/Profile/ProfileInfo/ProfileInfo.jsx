import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

function ProfileInfo(props) {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
             {/*<div className={styles.profileInfo}>*/}
             {/*    <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'></img>*/}
             {/*</div>*/}
             <div className={styles.descriptionBlock}>
                 <h2>{props.profile.fullName}</h2>
                 <img className={styles.avatar} src={props.profile.photos.large}></img>
                 <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
             </div>
         </div>
    );
}

export default ProfileInfo;
