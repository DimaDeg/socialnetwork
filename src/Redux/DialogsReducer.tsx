import {ActionTypesType, DialogsPageType, MessageType} from "./State";


export const DialogsReducer = (DialogsPage:DialogsPageType, action:ActionTypesType) => {
    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT':
            DialogsPage.newMessage = action.message
            return DialogsPage

        case 'SEND-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message
            };
            DialogsPage.messages.push(newMessage)
            DialogsPage.newMessage = ''
            return DialogsPage

        default:
            return DialogsPage
    }
}

export const UpdateMessageTextAC = (message: string) => ({
    type: 'UPDATE-MESSAGE-TEXT',
    message
} as const)
export const SendMessageAC = (message: string) => ({
    type: 'SEND-MESSAGE',
    message
} as const)
