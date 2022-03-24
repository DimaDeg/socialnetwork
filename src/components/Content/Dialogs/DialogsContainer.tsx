import React, {ChangeEvent, KeyboardEvent} from 'react';
import {StoreType} from "../../../Redux/State";
import {SendMessageAC, UpdateMessageTextAC} from "../../../Redux/DialogsReducer";
import {Dialogs} from './Dialogs';

type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState().DialogsPage

    const sendMessage = () => {
        debugger
        props.store.dispatch(SendMessageAC(state.newMessage))
    }

    const updateMessage = (message: string) => {
        props.store.dispatch(UpdateMessageTextAC(message))
    }

    return (
        <Dialogs DialogsPage={state}
                 sendMessage={sendMessage}
                 updateMessage={(message) => {updateMessage(message)
                 }}/>
    )

}