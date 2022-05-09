import {ActionTypesType} from "./State";

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
    status: ''
}


export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypesType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCount: 0
            };
            return {...state, newPostText: '', posts: [newPost, ...state.posts,]}

        }
        case 'UPDATE-POST-TEXT': {
            return {...state, newPostText: action.text}
        }
        case 'SET_USER_PROFILE': {
            return {...state, profile:action.profile}
        }
        default :
            return state
    }
}
export const addPostAC = () => ({
    type: 'ADD-POST',
} as const)

export const updatePostTextAC = (text: string) => ({
    type: 'UPDATE-POST-TEXT',
    text
} as const)
export const setUserProfile = (profile: ProfileUserType) => ({
    type: 'SET_USER_PROFILE',
    profile
} as const)

