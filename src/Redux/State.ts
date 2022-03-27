import {AddPostAC, ProfileReducer, UpdatePostTextAC} from "./ProfileReducer";
import {DialogsReducer, SendMessageAC, UpdateMessageTextAC} from "./DialogsReducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    avatar: string
    id: number
    name: string
}
type PostType = {
    id: number
    post: string
    likeCount: number
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}
type FriendsType = {
    avatar: string
    id: number
    name: string
    info: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    /*    Sidebar: SidebarType*/
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    _subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypesType) => void

}
export type ActionTypesType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdatePostTextAC>
    | ReturnType<typeof UpdateMessageTextAC> | ReturnType<typeof SendMessageAC>


export const store: StoreType = {

    _onChange() {
        console.log('state changed')
    },
    _subscribe(observer: () => void) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    _state: {

        ProfilePage: {
            posts: [
                {id: 1, post: 'First Post', likeCount: 15},
                {id: 2, post: 'Second Post', likeCount: 20}
            ],
            newPostText: ''
        },

        DialogsPage: {
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
        /*    ,
            Sidebar: {
                friends: [
                    {avatar: 'https://download-cs.net/steam/avatars/3447.jpg', id: 6, name: 'Kirill', info: ''},
                    {avatar: 'https://download-cs.net/steam/avatars/3446.jpg', id: 7, name: 'Kostya', info: ''},
                    {avatar: 'https://download-cs.net/steam/avatars/3404.jpg', id: 8, name: 'Andrey', info: ''},
                ]
            }*/

    },
    dispatch(action) {
        ProfileReducer(this._state.ProfilePage, action)
        DialogsReducer(this._state.DialogsPage, action)
        this._onChange()
    }

}