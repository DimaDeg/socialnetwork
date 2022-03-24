import {createStore, combineReducers} from 'redux'
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";


const reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer
})

export let store = createStore(reducers)