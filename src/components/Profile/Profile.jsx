import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from "./MyPosts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({profile, status, updateStatus}) {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
