import {AppStateType} from "./ReduxStore";

export const getUsersPages = (state: AppStateType)=> {
    return state.UsersPage
}
