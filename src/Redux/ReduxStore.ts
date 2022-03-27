import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";


const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)