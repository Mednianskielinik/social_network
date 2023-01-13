import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import styles from './Posts.module.css';
import {Field, reduxForm} from "redux-form";
import {required, maxLength} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Post message'} validate={[required, maxLength10]} name={'newPost'}
                       component={Textarea}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'addPost'
})(AddNewPostForm);

function Posts(props) {
    let addPost = (values) => {
        props.addPost(values.newPost);
    }
    return (
        <div className={styles.posts}>
            <h2>My Post</h2>
            <AddMessageFormRedux onSubmit={addPost}/>
            <div className={style.posts}>
                {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
}

export default Posts;
