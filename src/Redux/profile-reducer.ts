import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppStateType } from "./ReduxStore";
import {ActionTypesType} from "./State";
import {profileApi} from "../API/Api";

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
                post: action.text,
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
        default :
            return state
    }
}

////action creators
export const addPostAC = (text:string) => ({
    type: 'ADD-POST',text
} as const)


export const setUserProfile = (profile: ProfileUserType) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const)

export const setStatus = (statusText: string) => ({type: 'SET_STATUS', statusText}) as const



/////////thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>

export const getProfile = (id: number):ThunkType => (dispatch:ThunkDispatchActionType) => {
    profileApi.getProfile(id)
        .then(data=>dispatch(setUserProfile(data)))
}

export const getStatus = (userId: number): ThunkType => (dispatch: ThunkDispatchActionType) => {
    profileApi.getStatus(userId)
        .then(res => dispatch(setStatus(res.data)))
}

export const updateStatus = (statusText: string): ThunkType => (dispatch: ThunkDispatchActionType) => {
    profileApi.updateStatus(statusText)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setStatus(statusText))
            }
        })
}