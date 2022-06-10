import {createStore, applyMiddleware, combineReducers} from 'redux'
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import {AppReducer} from "./app-reducer";


const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: AppReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

//@ts-ignore
window.store = store