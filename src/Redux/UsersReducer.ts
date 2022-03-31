import {ActionTypesType} from "./State";

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
}

export type InitialUsersType = {
    users: UsersType[]
}

const initialState: InitialUsersType = {
    users: []/*[{
        : 'https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp',
        followed: true,
        id: 1,
        name: 'Dima',
        status: 'lod',
        location: {city: 'Minsk', country: 'RB'}
    },
        {
            avatar: 'https://download-cs.net/steam/avatars/3447.jpg',
            followed: true,
            id: 2,
            name: 'Vasya',
            status: 'lod',
            location: {city: 'SPB', country: 'RF'}
        },
        {
            avatar: 'https://download-cs.net/steam/avatars/3446.jpg',
            followed: false,
            id: 3,
            name: 'Petya',
            status: 'lod',
            location: {city: 'Moscow', country: 'RF'}
        },
        {
            avatar: 'https://download-cs.net/steam/avatars/3404.jpg',
            followed: false,
            id: 4,
            name: 'Senya',
            status: 'lod',
            location: {city: 'Vitebsk', country: 'RB'}
        },
        {
            avatar: 'https://download-cs.net/steam/avatars/3117.jpg',
            followed: true,
            id: 5,
            name: 'Lesya',
            status: 'lod',
            location: {city: 'Brest', country: 'RB'}
        }]*/
}


export const UsersReducer = (state: InitialUsersType = initialState, action: ActionTypesType) => {

    switch (action.type) {
        case "FOLLOW-USER": {
            return {...state, users: state.users.map(f => (f.id === action.UserId ? {...f, followed: true} : f))}
        }
        case "UNFOLLOW-USER": {
            return {...state, users: state.users.map(f => f.id === action.UserId ? {...f, followed: false} : f)}
        }
        case "SET-USERS": {
            debugger
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state
    }
}
export const FollowUserAC = (UserId: number) => ({
    type: 'FOLLOW-USER',
    UserId
} as const)
export const UnfollowUserAC = (UserId: number) => ({
    type: 'UNFOLLOW-USER',
    UserId
} as const)
export const SetUsersAC = (users: UsersType[]) => ({
    type: 'SET-USERS',
    users
} as const)

