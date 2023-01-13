import React from 'react';
import {messageActionCreator} from "../../redux/dialogsReducer";
import DialogList from "./DialogList";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => (
    {
        messagesPage: state.dialogsPage,
    }
)

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(messageActionCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(DialogList);
