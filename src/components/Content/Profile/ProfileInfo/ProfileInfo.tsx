import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileUserType} from "../../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import user from '../../../../assets/images/user.png'

type ProfileInfoPropsType = {
    profile: ProfileUserType | null
/*    status: string
    updateStatus: (statusText: string) => void*/
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={s.bi}
                    src={profile?.photos.large ? profile.photos.large : user}
                    alt={''}/>
            </div>
            <div className={s.item}>
                Avatar + Description
            </div>
        </div>
    )
}