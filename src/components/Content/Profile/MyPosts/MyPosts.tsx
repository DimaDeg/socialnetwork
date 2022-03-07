import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {ProfilePageType} from "../../../../Redux/State";
import {Post} from './Post/Post';

type MyPostsType={
    ProfilePage: ProfilePageType
    addPost: (post: string)=>void
    updatePostText: (text:string)=>void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElements = props.ProfilePage.posts.map(p => <Post key={p.id} id={p.id} post={p.post} likeCount={p.likeCount}/>)

    const addPostHandler = () => {
        if (props.ProfilePage.newPostText?.trim()) {
            props.addPost(props.ProfilePage.newPostText)
        }
    }
    
    const updatePostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }


    return (
        <div className={s.item}><h2>My posts</h2>
            <div className={s.item}>
                <h3>New Post</h3>
                <div>
                    <textarea value={props.ProfilePage.newPostText}
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
