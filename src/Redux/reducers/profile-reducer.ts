import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionTypesType} from "../State";
import {profileApi} from "../../API/Api";

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
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


export type ContactsProfileType = {
    [key: string]: string
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}


const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'First Post', likeCount: 15},
        {id: 2, post: 'Second Post', likeCount: 20}
    ],
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
            return {...state, posts: [newPost, ...state.posts,]}
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
        case 'CHANGE_PHOTO': {
            return {...state, profile: {...state.profile!, photos: action.photos}}
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
    type: 'SET_USER_PROFILE', profile
} as const)

export const setStatus = (statusText: string) => ({type: 'SET_STATUS', statusText}) as const

export const changePhoto = (photos: PhotosProfileType) => ({type: 'CHANGE_PHOTO', photos}) as const

export const deletePost = (id: number) => ({
    type: 'DELETE-POST', id
} as const)


/////////thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>

export const getProfile = (id: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await profileApi.getProfile(id)
    dispatch(setUserProfile(res))
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

export const savePhoto = (photo: File): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const formData = new FormData()
    formData.append('image', photo)
    let data = await profileApi.savePhoto(formData)
    if (data.resultCode === 0) {
        dispatch(changePhoto(data.data.photos))
    }
}

export const saveProfileInfo = (profileInfo: any) => async (dispatch: ThunkDispatchActionType, getState: () => AppStateType) => {
    const ownerId = getState().Auth.id
    const res = await profileApi.updateProfileInfo(profileInfo)
    try {
        if (res.data.resultCode === 0) {
            dispatch(getProfile(ownerId!))
        }
    }
    catch (err){
        dispatch(setStatus(res.data.messages[0]))
    }
}