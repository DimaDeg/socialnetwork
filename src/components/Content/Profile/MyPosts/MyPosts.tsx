import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./MyPosts.module.css";
import {PostType, ProfilePageType} from "../../../../Redux/State";
import {Post} from './Post/Post';

type MyPostsType = {
    posts: PostType[]
    postText: string
    updatePostText: (text: string) => void
    addPost: (text: string) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.posts.map(p => <div className={s.post}><Post key={p.id}
                                                                           id={p.id}
                                                                           post={p.post}
                                                                           likeCount={p.likeCount}/></div>)

    const addPostHandler = () => {
        props.addPost(props.postText)
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
