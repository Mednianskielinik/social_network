import React from 'react';
import Posts from './Posts';
import {postActionCreator} from '../../../redux/profileReducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => ({
    addPost: (newPost) => {
        dispatch(postActionCreator(newPost));
    }
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
