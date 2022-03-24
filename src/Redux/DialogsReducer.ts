import {ActionTypesType, MessageType} from "./State";


const initialState = {
    dialogs: [
        {avatar: 'https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp', id: 1, name: 'Dima'},
        {avatar: 'https://download-cs.net/steam/avatars/3447.jpg', id: 2, name: 'Vasya'},
        {avatar: 'https://download-cs.net/steam/avatars/3446.jpg', id: 3, name: 'Petya'},
        {avatar: 'https://download-cs.net/steam/avatars/3404.jpg', id: 4, name: 'Senya'},
        {avatar: 'https://download-cs.net/steam/avatars/3117.jpg', id: 5, name: 'Lesya'}
    ],
    messages: [
        {id: 1, message: 'dqweqwrq'},
        {id: 2, message: 'fsdfas'},
        {id: 3, message: 'tyer'},
        {id: 4, message: 'hdsfbxc'},
        {id: 5, message: 'ooretw'}
    ],
    newMessage: ''
}

export const DialogsReducer = (DialogsPage=initialState, action:ActionTypesType) => {
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
