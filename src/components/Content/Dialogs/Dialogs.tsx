import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../../Redux/State";

type MyDialogsType = {
    DialogsPage: DialogsPageType
    sendMessage: ()=>void
    updateMessage: (message:string)=>void
}

export const Dialogs: React.FC<MyDialogsType> = (props) => {

    let dialogsElement = props.DialogsPage.dialogs.map(d => <div className={s.item}><Dialog avatar={d.avatar}
                                                                         name={d.name}
                                                                         id={d.id}/>
    </div>)

    let messagesElements = props.DialogsPage.messages.map(m => <div className={s.bubble}><Message id={m.id}
                                                                        message={m.message}/>
    </div>)

    const sendMessageHandler = () => {
        if (props.DialogsPage.newMessage?.trim())
            props.sendMessage()
    }

    const updateMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    const onKeySendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessageHandler()
        }
    }

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