import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {MyPostsPageType} from "./MyPostsContainer";

export const MyPosts: React.FC<MyPostsPageType> = (props) => {

    let postsElements = props.posts.map(p => <div className={s.post}><Post key={p.id}
                                                                           id={p.id}
                                                                           post={p.post}
                                                                           likeCount={p.likeCount}/></div>)

    const addPostHandler = () => {
        if (props.postText?.trim())
            props.addPost()
    }

    const onKeyAddPost = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            addPostHandler()
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updatePostText(e.currentTarget.value)
    }


    return (

        <div className={s.border}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.item}>
                <h3 className={s.h3}>New Post</h3>
                <div className={s.in}>
                    <input value={props.postText}
                           placeholder={'Enter Post Text...'}
                           onKeyPress={onKeyAddPost}
                           onChange={updatePostTextHandler}
                    />
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
