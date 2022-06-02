import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./ReduxStore";
import {ActionTypesType} from "./State";
import {UserApi} from "../API/userApi";

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
    followingProgress: Array<number | undefined>
}

const initialState: InitialUsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
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
        case "SET-USERS-COUNT": {
            return {...state, totalUsersCount: action.usersCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: !state.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING': {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(el => el !== action.userId)
            }
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
export const setUsersCount = (usersCount: number) => ({
    type: 'SET-USERS-COUNT',
    usersCount
} as const)
export const toggleIsFetching = () => ({
    type: 'TOGGLE-IS-FETCHING'
} as const)
export const toggleIsFollowing = (userId: number, isFetching: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING', userId, isFetching
} as const)


/////thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>


export const getUsers = (currentPage: number, pageSize: number): ThunkType => (dispatch: ThunkDispatchActionType) => {
    dispatch(toggleIsFetching())
    UserApi.getUser(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching())
            dispatch(setUsers(data.items))
            dispatch(setUsersCount(data.totalCount))
        })
}

export const follow = (id: number): ThunkType => (dispatch: ThunkDispatchActionType) => {
    dispatch(toggleIsFollowing(id, true))
    UserApi.follow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(id))
            }
            dispatch(toggleIsFollowing(id, false))
        })
}

export const unfollow = (id: number): ThunkType => (dispatch: ThunkDispatchActionType) => {
    dispatch(toggleIsFollowing(id, true))
    UserApi.unfollow(id)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowUser(id))
            }
            dispatch(toggleIsFollowing(id, false))
        })
}