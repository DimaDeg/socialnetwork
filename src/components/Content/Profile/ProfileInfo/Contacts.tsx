import React from "react";
import s from './ProfileInfo.module.css'

type ContactsType = {
    contactTitle: string
    value: string
}

export const Contacts:React.FC<ContactsType> = ({contactTitle,value}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}: </b><div>{value}</div>
    </div>
}