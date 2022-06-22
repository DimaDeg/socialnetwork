import {ActionTypesType} from "../State";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {authApi} from "../../API/Api";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const SET_USER_DATA = 'AUTH/SET-USER-DATA'

export const AuthReducer = (state: AuthType = initialState, action: ActionTypesType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, data: {id, login, email, isAuth}
} as const)


//////thunk
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>


export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await authApi.me()
    if (res.resultCode === 0) {
        const {id, login, email} = res.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (data: { email: string, password: string, rememberMe: boolean }): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const {email, password, rememberMe} = data;
    let res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }
}


export const logout = (): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    let res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}