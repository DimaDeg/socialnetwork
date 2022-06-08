import React from "react";
import s from "./MyPosts.module.css";
import {Post} from './Post/Post';
import {MyPostsPageType} from "./MyPostsContainer";
import {PostForm} from "./PostForm";

export const MyPosts: React.FC<MyPostsPageType> = (props) => {

    let postsElements = props.posts.map(p => <div key={p.id} className={s.post}><Post id={p.id}
                                                                           post={p.post}
                                                                           likeCount={p.likeCount}/></div>)


    return (

        <div className={s.border}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.item}>
                <h3 className={s.h3}>New Post</h3>
                <PostForm addPost={props.addPost}/>
            </div>
            {postsElements}
        </div>
    )
}
