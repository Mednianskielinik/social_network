import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto
} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom';
import {compose} from "redux";
import {Navigate} from "react-router";

function ProfileContainer(props) {
    let userId = useParams().id
    if (!userId) {
        userId = props.currentUserId;
        if (!userId) {
            return <Navigate to={'/login'}/>
        }
    }
    useEffect(() => {
        props.getUserProfile(userId);
        props.getUserStatus(userId)
    }, [userId]);

    return (
        <Profile
            {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateUserStatus}
            isOwner={!useParams().id}
            savePhoto={props.savePhoto}
        />
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserId: state.auth.userId,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
)(ProfileContainer);