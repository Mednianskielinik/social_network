import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus
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
    }, []);

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateUserStatus}/>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    currentUserId: state.auth.userId,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
)(ProfileContainer);