import React from 'react';
import styles from './DialogList.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

const maxLength100 = maxLength(100);

function MessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength100]} name='newMessage' placeholder='Enter your message'/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessage'
})(MessageForm);

function DialogList(props) {
    let addMessage = (values) => {
        props.sendMessage(values.newMessage);
    }

    if (props.isAuth === false) {
        return <Navigate to={'/login'}/>
    }

    let dialogsElement = props.messagesPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messages = props.messagesPage.messages.map(message => <Message key={message.id} message={message.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messages}
                <AddMessageFormRedux onSubmit={addMessage}/>
            </div>

        </div>
    );
}

export default DialogList;
