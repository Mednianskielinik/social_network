import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {userAuth, logoutUser} from "../../redux/authReducer";

function HeaderContainer(props) {
    return (
        <Header {...props} />
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {userAuth, logoutUser})(HeaderContainer);
