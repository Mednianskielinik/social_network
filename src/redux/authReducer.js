import {auth, login, logout} from "../api/profile";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const userAuth = () => async (dispatch) => {
    let response = await auth();
    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(userAuth());
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
        let action = stopSubmit('login', {_error: message});
        dispatch(action)
    }
}

export const logoutUser = () => async (dispatch) => {
    let response = await logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;