import React from 'react';
import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "./DialogsContainer";
import {DialogForm} from "./DialogsForm";


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


    return (
        <div className={s.dialogsMain}>
            <div className={s.messages}>
                {messagesElements}
                <DialogForm sendMessage={props.sendMessage}/>
            </div>
            <div className={s.dialogs}>
                {dialogsElement}
            </div>
        </div>

    )

}