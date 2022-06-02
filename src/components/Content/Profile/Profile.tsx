import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileUserType | null
    // status: string
    // updateStatus: (statusText: string) => void
}


export const Profile:React.FC<ProfilePropsType> = (props) => {


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
