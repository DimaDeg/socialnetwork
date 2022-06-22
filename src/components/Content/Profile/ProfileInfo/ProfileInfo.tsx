import React, {ChangeEvent} from "react";
import {ProfileUserType, savePhoto} from "../../../../Redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatus} from "./ProfileStatus";
import s from './ProfileInfo.module.css'
import {useDispatch} from "react-redux";


type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (statusText: string) => void
    isOwner: boolean,
    savePhoto: (photo: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, isOwner, ...props}) => {
    const dispatch = useDispatch()

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    return (
        <div>
            <img className={s.ava} src={profile && profile.photos.large ? profile.photos.large : userPhoto}
                 alt={''}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <span style={{color: 'white', fontSize: 20}}>{profile && profile.fullName}</span>
            <ProfileStatus {...props}/>
        </div>
    )
}