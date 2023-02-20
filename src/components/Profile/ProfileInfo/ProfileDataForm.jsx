import React, {useState} from 'react';
import styles from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";

function ProfileDataForm({profile, handleSubmit, goToEditMode}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button onClick={() => {
                }}>Save
                </button>
            </div>
            <div>
                <b>Full name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField('', 'lookingForAGob', [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills:</b>
                {createField('', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField('', 'aboutMe', [], Textarea)}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts:</b> {profile.contacts && Object.keys(profile.contacts).map(key => {*/}
            {/*        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*    }*/}
            {/*)}*/}
            {/*</div>*/}
        </form>
    );
}

const ReduxProfileDataForm = reduxForm({
    form: 'profileData'
})(ProfileDataForm);

export default ReduxProfileDataForm

