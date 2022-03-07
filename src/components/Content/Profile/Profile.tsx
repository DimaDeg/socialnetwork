import React from "react";
import s from 'Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../Redux/State";

type ProfileType = {
    ProfilePage: ProfilePageType
    addPost: () => void
    updatePostText: (text: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts ProfilePage={props.ProfilePage}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}/>
        </div>
    )
}
