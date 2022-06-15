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

export const AuthReducer = (state: AuthType = initialState, action: ActionTypesType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA', data: {id, login, email,isAuth}
} as const)


//////thunk
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>


export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatchActionType) => {
    authApi.me()
        .then(res => {
            if (res.resultCode === 0) {
                const {id, login, email} = res.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}

export const login = (data: { email: string, password: string, rememberMe: boolean }): ThunkType => (dispatch: ThunkDispatchActionType) => {
    const {email, password, rememberMe} = data;
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = (): ThunkType => (dispatch: ThunkDispatchActionType) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}