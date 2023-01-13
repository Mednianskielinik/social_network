import React from 'react';
import {reduxForm} from "redux-form";
import {Input, createField} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import styles from './../common/FormsControls/FormsControls.module.css'

function LoginForm({handleSubmit, error}) {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: 'password'})}
            {createField('', 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}
            {
                error &&
                <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login(props) {
    const onSubmit = (formData) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginUser})(Login);
