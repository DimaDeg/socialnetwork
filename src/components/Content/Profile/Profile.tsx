import React from "react";
import s from 'Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypesType, ProfilePageType} from "../../../Redux/State";

type ProfileType = {
    ProfilePage: ProfilePageType
    dispatch: (action:ActionTypesType) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts ProfilePage={props.ProfilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}
