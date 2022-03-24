import React from "react";
import {StoreType} from '../../../../Redux/State'
import {AddPostAC, UpdatePostTextAC} from "../../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    store: StoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {

    let ProfilePage = props.store.getState().ProfilePage

    const addPost = () => {
        props.store.dispatch(AddPostAC(ProfilePage.newPostText))
    }

    const updatePostTextHandler = (text:string) => {
        props.store.dispatch(UpdatePostTextAC(text))
    }

    return (
        <MyPosts posts={ProfilePage.posts}
                 postText={ProfilePage.newPostText}
                 updatePostText={updatePostTextHandler}
                 addPost={addPost}/>
    )
}
