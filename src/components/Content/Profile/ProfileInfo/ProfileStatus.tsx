import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (statusText: string) => void
}

export const ProfileStatus: React.FC<ProfileStatusType> = ({status,updateStatus}) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [statusText, setStatusText] = useState<string>(status)

    useEffect(()=>{
        setStatusText(status)
    },[status])

    const editModeTrue = () => {
        setEditMode(true)
        setStatusText(status)
    }

    const onBlurHandler = () => {
        setEditMode(false)
        if (status === statusText) return
        updateStatus(statusText.trim())
    }

    const changeStatus = (e:ChangeEvent<HTMLInputElement>)=>{
        setStatusText(e.currentTarget.value)
    }

    return <div>
        {editMode ?
            <div><input onBlur={onBlurHandler}  onChange={changeStatus} value={statusText} autoFocus={true}/></div> :
            <div style={{color: 'white',fontSize:20}}><b>Status: </b><span onDoubleClick={editModeTrue}>status: {statusText}</span></div>}
    </div>
}