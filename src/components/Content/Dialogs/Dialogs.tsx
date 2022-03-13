import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionTypesType, DialogsPageType} from "../../../Redux/State";
import {SendMessageAC, UpdateMessageTextAC} from "../../../Redux/DialogsReducer";

type MyDialogsType = {
    DialogsPage: DialogsPageType
    dispatch: (action: ActionTypesType) => void
}

export const Dialogs: React.FC<MyDialogsType> = (props) => {

    let dialogsElement = props.DialogsPage.dialogs.map(d => <div className={s.item}><Dialog avatar={d.avatar}
                                                                         name={d.name}
                                                                         id={d.id}/>
    </div>)

    let messagesElements = props.DialogsPage.messages.map(m => <div className={s.bubble}><Message id={m.id}
                                                                        message={m.message}/>
    </div>)

    const sendPostHandler = () => {
        if (props.DialogsPage.newMessage?.trim())
            props.dispatch(SendMessageAC(props.DialogsPage.newMessage))
    }

    const updateMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(UpdateMessageTextAC(e.currentTarget.value))
    }

    const onKeySendMessage = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendPostHandler()
        }
    }

    return (
        <div className={s.dialogsMain}>
            <div className={s.messages}>
                {messagesElements}
                <input value={props.DialogsPage.newMessage}
                       placeholder={'Enter Message...'}
                       onKeyPress={onKeySendMessage}
                       onChange={updateMessageHandler}/>
                <button onClick={sendPostHandler}>send</button>
            </div>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
        </div>

    )

}