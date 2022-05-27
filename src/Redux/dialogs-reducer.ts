import {ActionTypesType} from "./State";

export type DialogType = {
    avatar: string
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {avatar: 'https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp', id: 1, name: 'Dima'},
        {avatar: 'https://download-cs.net/steam/avatars/3447.jpg', id: 2, name: 'Vasya'},
        {avatar: 'https://download-cs.net/steam/avatars/3446.jpg', id: 3, name: 'Petya'},
        {avatar: 'https://download-cs.net/steam/avatars/3404.jpg', id: 4, name: 'Senya'},
        {avatar: 'https://download-cs.net/steam/avatars/3117.jpg', id: 5, name: 'Lesya'}
    ] as DialogType[],
    messages: [
        {id: 1, message: 'dqweqwrq'},
        {id: 2, message: 'fsdfas'},
        {id: 3, message: 'tyer'},
        {id: 4, message: 'hdsfbxc'},
        {id: 5, message: 'ooretw'}
    ] as MessageType[],
    newMessage: ''
}
export type InitialDialogsType = typeof initialState

export const DialogsReducer = (state: InitialDialogsType = initialState, action: ActionTypesType) => {

    switch (action.type) {
        case 'UPDATE-MESSAGE-TEXT': {
            return {...state, newMessage: action.message}
        }
        case 'SEND-MESSAGE': {
            let sendMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessage
            };
            return  {...state, newMessage: '', messages: [...state.messages, sendMessage]}
        }

        default:
            return state
    }
}

export const UpdateMessageTextAC = (message: string) => ({
    type: 'UPDATE-MESSAGE-TEXT',
    message
} as const)
export const SendMessageAC = () => ({
    type: 'SEND-MESSAGE'
} as const)
