import React from "react";
import s from 'Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypesType, ProfilePageType, StoreType} from "../../../Redux/State";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: StoreType
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}
