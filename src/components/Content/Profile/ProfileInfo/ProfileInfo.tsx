import React, {ChangeEvent, useState} from "react";
import {ProfileUserType, savePhoto} from "../../../../Redux/reducers/profile-reducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'
import {ProfileStatus} from "./ProfileStatus";
import s from './ProfileInfo.module.css'
import {useDispatch} from "react-redux";
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profile: ProfileUserType | null
    status: string
    updateStatus: (statusText: string) => void
    isOwner: boolean,

}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, isOwner, ...props}) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            <img className={s.ava} src={profile && profile.photos.large ? profile.photos.large : userPhoto}
                 alt={''}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {isOwner && !editMode ? <div><button onClick={toggleEditMode}>Edit</button>
            </div>:''}
            {!editMode ? <ProfileData profile={profile}/> : <ProfileDataForm profile={profile} toggleEditMode={toggleEditMode}/>}

            <ProfileStatus {...props}/>
        </div>
    )
}