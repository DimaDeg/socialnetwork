import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./MyPosts.module.css";
import {ActionTypesType, ProfilePageType} from "../../../../Redux/State";
import {Post} from './Post/Post';
import {AddPostAC, UpdatePostTextAC} from "../../../../Redux/ProfileReducer";

type MyPostsType = {
    ProfilePage: ProfilePageType
    dispatch: (action: ActionTypesType) => void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.ProfilePage.posts.map(p => <Post key={p.id} id={p.id} post={p.post}
                                                               likeCount={p.likeCount}/>)

    const addPostHandler = () => {
        if (props.ProfilePage.newPostText?.trim()) {
            props.dispatch(AddPostAC(props.ProfilePage.newPostText))
        }
    }

    const onKeyAddPost = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            addPostHandler()
    }

    const updatePostTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(UpdatePostTextAC(e.currentTarget.value))
    }


    return (

        <div className={s.border}>
            <h2>My posts</h2>
            <div className={s.item}>
                <h3>New Post</h3>
                <div>
                    <input value={props.ProfilePage.newPostText}
                           placeholder={'Enter Post Text...'}
                              onKeyPress={onKeyAddPost}
                              onChange={updatePostTextHandler}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}
