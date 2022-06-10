import {ActionTypesType} from "./State";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./ReduxStore";
import {getAuthUserData} from "./auth-reducer";

export type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const AppReducer = (state: InitialStateType = initialState, action: ActionTypesType): InitialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default:
            return state;
    }
}

export const setInitialized = () => ({
    type: 'SET-INITIALIZED'
} as const)


//////thunk
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypesType>
type ThunkDispatchActionType = ThunkDispatch<AppStateType, unknown, ActionTypesType>

export const initializeApp = ():ThunkType => (dispatch:ThunkDispatchActionType) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>dispatch(setInitialized()))

}
