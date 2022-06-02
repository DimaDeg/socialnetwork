import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "./DialogsContainer";
import {Login} from "../Login/login";


export const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElement = props.DialogsPage.dialogs.map((d) => <div key={d.id} className={s.item}>
        <Dialog
            avatar={d.avatar}
            name={d.name}
            id={d.id}/>
    </div>)

    let messagesElements = props.DialogsPage.messages.map((m) => <div key={m.id} className={s.bubble}>
        <Message
            id={m.id}
            message={m.message}/>
    </div>)

    const sendMessageHandler = () => {
        if (props.DialogsPage.newMessage?.trim()) {
            props.sendMessage(props.DialogsPage.newMessage)
        }
        props.updateMessage('')
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    const onKeySendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessageHandler()
        }
    }

    if(!props.isAuth) return <Login/>

    return (
        <div className={s.dialogsMain}>
            <div className={s.messages}>
                {messagesElements}
                <input value={props.DialogsPage.newMessage}
                       placeholder={'Enter Message...'}
                       onKeyPress={onKeySendMessage}
                       onChange={updateMessageTextHandler}
                />
                <button onClick={sendMessageHandler}>Send</button>
            </div>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
        </div>

    )

}