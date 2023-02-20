import {getProfile, getStatus, updateStatus, saveUserPhoto} from "../api/profile";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 25},
    ],
    profile: {
        lookingForAJob: null,
        lookingForAJobDescription: null,
        aboutMe: null,
        photos: {},
        fullName: '',
    },
    status: '',
    contacts: {
        github: '',
        vk: ''
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPost, likesCount: 0}],
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,  profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const postActionCreator = (newPost) => ({type: ADD_POST, newPost: newPost})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const setUserProfile = (profile) => (
    {type: SET_USER_PROFILE, profile: profile}
)

export const setStatus = (status) => (
    {type: SET_STATUS, status: status}
)

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await getStatus(userId);
    dispatch(setStatus(response));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await saveUserPhoto(file);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export default profileReducer;