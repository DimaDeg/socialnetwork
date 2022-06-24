import {Contacts} from "./Contacts";
import React from "react";
import {ProfileUserType} from "../../../../Redux/reducers/profile-reducer";

type ProfileDataType = {
    profile: ProfileUserType
}

export const ProfileData:React.FC<ProfileDataType> = ({profile}) => {

    const {contacts,aboutMe,lookingForAJob,lookingForAJobDescription,fullName} = profile

    return(
        <div>
            <div style={{color: 'white', fontSize: 20}}>{fullName}</div>
            <div style={{color: 'white', fontSize: 20}}><b>About Me: </b>{aboutMe}</div>
            <div style={{color: 'white', fontSize: 20}}><b>Looking for a
                job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>
            {lookingForAJob &&
                <div style={{color: 'white', fontSize: 20}}><b>Description: </b>{lookingForAJobDescription}
                </div>
            }

            <div>
                <b>Contacts:</b>{Object.keys(contacts).map(key =>
                <Contacts key={key} contactTitle={key} value={contacts[key]}/>
            )}
            </div>
        </div>)
}