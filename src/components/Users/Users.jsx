import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users({currentPage, onPageChange, totalUsersCount, pageSize, users, followingInProgress, unfollow, follow}) {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            {
                users.map(user => <User user={user} followingInProgress={followingInProgress} unfollow={unfollow}
                                        follow={follow}/>)
            }
        </div>
    );
}

export default Users;