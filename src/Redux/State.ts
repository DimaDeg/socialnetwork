import {addPostAC, setUserProfile, updatePostTextAC} from "./profile-reducer";
import { SendMessageAC, UpdateMessageTextAC} from "./DialogsReducer";
import {
    setActivePage,
    followUser,
    setUsers,
    unfollowUser,
    setUsersCount, toggleIsFetching
} from "./users-reducer";

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
}
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    _subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypesType) => void

}
export type ActionTypesType = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostTextAC>
    | ReturnType<typeof UpdateMessageTextAC> | ReturnType<typeof SendMessageAC> | ReturnType<typeof setUsers> |
    ReturnType<typeof followUser> | ReturnType<typeof unfollowUser> | ReturnType<typeof setActivePage> |
    ReturnType<typeof setUsersCount> | ReturnType<typeof toggleIsFetching>| ReturnType<typeof setUserProfile>

