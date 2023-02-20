import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}) {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            {/*<div className={styles.profileInfo}>*/}
            {/*    <img src='https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'></img>*/}
            {/*</div>*/}
            <div className={styles.descriptionBlock}>
                <h2>{profile.fullName}</h2>
                <img className={styles.avatar} src={profile.photos.large || userPhoto}></img>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataForm profile={profile}/> :
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
                <ProfileStatus updateStatus={updateStatus} status={status}/>
            </div>
        </div>
    );
}

function ProfileData({profile, isOwner, goToEditMode}) {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {profile.contacts && Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }
        )}
        </div>
    </div>
}

function Contact({contactTitle, contactValue}) {
    return <div>
        <i>{contactTitle}:</i> {contactValue}
    </div>
}

export default ProfileInfo;
