import {AppStateType} from "./ReduxStore";
import {createSelector} from "reselect";
import {InitialUsersType} from "./reducers/users-reducer";

export const getUsersPages = (state: AppStateType) => {
    return state.UsersPage
}
export const getUsersBySelector = createSelector(getUsersPages,(usersPage:InitialUsersType) => {
    return usersPage
})