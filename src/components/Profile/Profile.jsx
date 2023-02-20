import React from 'react';
import styles from './Profile.module.css';
import PostsContainer from "./MyPosts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({profile, status, updateStatus, isOwner, savePhoto}) {
    return (
        <div className={styles.content}>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status}
                         updateStatus={updateStatus}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
