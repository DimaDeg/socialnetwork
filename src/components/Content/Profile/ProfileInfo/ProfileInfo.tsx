import React from "react";
import {ProfileUserType} from "../../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatus} from "./ProfileStatus";
import s from './ProfileInfo.module.css'


type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (statusText: string) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile,...props}) => {
        if (!profile) {
            return <Preloader/>
        }

        return (
            <div>
                <img className={s.ava} src={profile?.photos.small ? profile.photos.small : userPhoto}
                     alt={''}/>

                <span style={{color:'white',fontSize:20}}>   {profile.fullName}</span>
                <ProfileStatus {...props}/>
            </div>
        )
    }