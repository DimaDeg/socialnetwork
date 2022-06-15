import {ActionTypesType} from "../State";

export type DialogType = {
    avatar: string
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
}

const initialState: DialogsPageType = {
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
}

export type InitialDialogsType = typeof initialState

export const DialogsReducer = (state: InitialDialogsType = initialState, action: ActionTypesType) => {

    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message
            };
            return  {...state, newMessage: '', messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export const SendMessageAC = (message: string) => ({
    type: 'SEND-MESSAGE',message
} as const)
