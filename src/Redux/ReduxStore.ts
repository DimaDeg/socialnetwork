import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";


const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)