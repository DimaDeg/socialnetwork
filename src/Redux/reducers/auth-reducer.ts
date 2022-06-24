import {ActionTypesType} from "../State";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../ReduxStore";
import {authApi, Nullable, securityApi} from "../../API/Api";

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: Nullable<string>
}

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null

}

const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export const AuthReducer = (state: AuthType = initialState, action: ActionTypesType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data}
        }
        case "GET_CAPTCHA_URL_SUCCESS": {
            return {...state, captchaUrl: action.captchaUrl}
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, data: {id, login, email, isAuth}
} as const)
export const getCaptchaUrlSuccess = (captchaUrl:string) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl} as const)
//////thunk
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>


export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const res = await authApi.me()
    if (res.resultCode === 0) {
        const {id, login, email} = res.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (data: { email: string, password: string, rememberMe: boolean }): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const {email, password, rememberMe} = data;
    const res = await authApi.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if(res.data.resultCode === 10){
        dispatch(getCaptchaUrl())
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const res = await securityApi.getCaptcha()
    dispatch(getCaptchaUrlSuccess(res.data.url))
}

export const logout = (): ThunkType => async (dispatch: ThunkDispatchActionType) => {
    const res = await authApi.logout()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}