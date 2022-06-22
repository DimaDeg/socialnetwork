import {addPostAC, changePhoto, deletePost, setStatus, setUserProfile} from "./reducers/profile-reducer";
import { SendMessageAC} from "./reducers/dialogs-reducer";
import {
    setActivePage,
    followUser,
    setUsers,
    unfollowUser,
    setUsersCount, toggleIsFetching, toggleIsFollowing
} from "./reducers/users-reducer";
import {setAuthUserData} from "./reducers/auth-reducer";
import {setInitialized} from "./reducers/app-reducer";

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
export type ActionTypesType = ReturnType<typeof addPostAC> | ReturnType<typeof SendMessageAC> | ReturnType<typeof setUsers> |
    ReturnType<typeof followUser> | ReturnType<typeof unfollowUser> | ReturnType<typeof setActivePage> |
    ReturnType<typeof setUsersCount> | ReturnType<typeof toggleIsFetching>| ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleIsFollowing> | ReturnType<typeof setInitialized>
    | ReturnType<typeof setStatus> | ReturnType<typeof deletePost> | ReturnType<typeof changePhoto>

