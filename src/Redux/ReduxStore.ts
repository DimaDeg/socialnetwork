import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {ProfileReducer} from "./reducers/profile-reducer";
import {DialogsReducer} from "./reducers/dialogs-reducer";
import {UsersReducer} from "./reducers/users-reducer";
import {AuthReducer} from "./reducers/auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import {AppReducer} from "./reducers/app-reducer";


const rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: AppReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleWare)
));

export type AppStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.__store__ = store