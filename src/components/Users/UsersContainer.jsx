import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsersThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";

function UsersContainer(props) {
    useEffect(() => {
        props.getUsersThunk(props.currentPage, props.pageSize)
    }, [])

    let onPageChange = (page) => {
        props.getUsersThunk(page, props.pageSize)
        props.setCurrentPage(page)
    };
    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users onPageChange={onPageChange} {...props}
            />
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// };

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsersThunk
    }),
)(UsersContainer);
