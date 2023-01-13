import React from 'react';
import './Post.module.css';
import styles from './Post.module.css';

function Post(props) {
    return (
        <div className={styles.item}>
            <img src='https://static.independent.co.uk/2022/08/22/15/newFile-2.jpg?width=1200'></img>
            {props.message}
            <div>
                likes {props.likesCount}
            </div>
        </div>
    );
}

export default Post;
