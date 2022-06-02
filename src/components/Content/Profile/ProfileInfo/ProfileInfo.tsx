import React from "react";
import {ProfileUserType} from "../../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'

type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    /*    status: string
        updateStatus: (statusText: string) => void*/
}

export const
    ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }


    return (
        <div>
                <img src={profile?.photos.small ? profile.photos.small : userPhoto}
                    alt={''}/>
                <div>{profile.fullName}</div>
        </div>
    )
}