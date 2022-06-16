import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionTypesType} from "../State";
import {profileApi} from "../../API/UserApi";

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileUserType | null
    status: string
}

type PhotosProfileType = {
    small: string | null
    large: string | null
}

export type ProfileUserType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
    photos: PhotosProfileType
}


type ContactsProfileType = {
    facebook: string
    github: string
    instagram: string
    mainLink: null,
    twitter: string
    vk: string
    website: null
    youtube: null
}


const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'First Post', likeCount: 15},
        {id: 2, post: 'Second Post', likeCount: 20}
    ],
    newPostText: '',
    profile: null,
    status: '',
}


export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypesType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: action.post,
                likeCount: 0
            };
            return {...state, newPostText: '', posts: [newPost, ...state.posts,]}


        }
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.statusText}
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(f => f.id !== action.id)}
        }
        default :
            return state
    }
}

////action creators
export const addPostAC = (post: string) => ({
    type: 'ADD-POST', post
} as const)


export const setUserProfile = (profile: ProfileUserType) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const)

export const setStatus = (statusText: string) => ({type: 'SET_STATUS', statusText}) as const

export const deletePost = (id: number) => ({
    type: 'DELETE-POST', id
} as const)


/////////thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>

export const getProfile = (id: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await profileApi.getProfile(id)
    dispatch(setUserProfile(res.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateStatus = (statusText: string): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await profileApi.updateStatus(statusText)
    if (res.data.resultCode === 0) {
        dispatch(setStatus(statusText))
    }
}