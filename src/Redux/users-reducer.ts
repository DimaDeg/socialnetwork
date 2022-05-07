import {ActionTypesType} from "./State";

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialUsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        }
        case "SET-ACTIVE-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-USERS-COUNT":{
            return {...state,totalUsersCount:action.usersCount}
        }
        case "TOGGLE-IS-FETCHING":{
            return {...state,isFetching:!state.isFetching}
        }
        default :
            return state
    }
}
export const followUser = (UserId: number) => ({
    type: 'FOLLOW-USER',
    UserId
} as const)
export const unfollowUser = (UserId: number) => ({
    type: 'UNFOLLOW-USER',
    UserId
} as const)
export const setUsers = (users: UsersType[]) => ({
    type: 'SET-USERS',
    users
} as const)
export const setActivePage = (currentPage: number) => ({
    type: 'SET-ACTIVE-PAGE',
    currentPage
} as const)
export const setUsersCount = (usersCount:number)=>({
    type: 'SET-USERS-COUNT',
    usersCount
}as const)
export const toggleIsFetching = () => ({
    type: 'TOGGLE-IS-FETCHING'
}as const)

