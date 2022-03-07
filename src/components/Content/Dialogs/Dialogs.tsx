import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../../Redux/State";

type MyDialogsType = {
    DialogsPage: DialogsPageType
    sendMessage: (message: string) => void
    updateMessageText: (message: string) => void
}

export const Dialogs: React.FC<MyDialogsType> = (props) => {

    let dialogsElement = props.DialogsPage.dialogs.map(d => <Dialog avatar={d.avatar} name={d.name} id={d.id}/>)

    let messagesElements = props.DialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    const sendPostHandler = () => {
        if(props.DialogsPage.newMessage?.trim())
        props.sendMessage(props.DialogsPage.newMessage)
    }

    const updateMessageHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogsMain}>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <input value={props.DialogsPage.newMessage} onChange={updateMessageHandler}/>
                <button onClick={sendPostHandler}>send</button>
            </div>
        </div>

    )

}