import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../../Redux/profile-reducer";
import s from './Profile.module.css'

type ProfilePropsType = {
    profile: ProfileUserType | null
    status: string
}


export const Profile:React.FC<ProfilePropsType> = (props) => {


    return (
        <div className={s.back}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}
