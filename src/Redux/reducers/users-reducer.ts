import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {ActionTypesType} from "../State";
import {api} from "../../API/api";

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


export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    dispatch(toggleIsFetching())
    dispatch(setActivePage(currentPage))
    let data = await api.getUser(currentPage, pageSize)
    dispatch(toggleIsFetching())
    dispatch(setUsers(data.items))
    dispatch(setUsersCount(data.totalCount))

}

export const follow = (id: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    await followUnfollowFlow(dispatch,id,api.follow.bind(api),followUser)
}

export const unfollow = (id: number): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    await followUnfollowFlow(dispatch,id,api.unfollow.bind(api),unfollowUser)
}

export const followUnfollowFlow = async (dispatch: ThunkDispatchActionType,id:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleIsFollowing(id, true))
    let data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowing(id, false))
}