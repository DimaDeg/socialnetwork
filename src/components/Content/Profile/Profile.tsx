import React from "react";
import s from 'Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../../Redux/profile-reducer";
import {Preloader} from "../Common/Preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileUserType | null
    // status: string
    // updateStatus: (statusText: string) => void
}


export const Profile:React.FC<ProfilePropsType> = (props) => {

    if (!props.profile)
        return <Preloader/>

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
