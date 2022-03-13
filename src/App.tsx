import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigate/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Navigate, Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import {StoreType} from "./Redux/State";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";

type AppType = {
    store: StoreType
}

export const PATH={
    PROFILE: '/Profile',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings'
}

export const App: React.FC<AppType> = (props) => {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.DIALOGS}/>}/>
                    <Route path={PATH.PROFILE} element={<Profile ProfilePage={props.store._state.ProfilePage}
                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={PATH.DIALOGS} element={<Dialogs DialogsPage={props.store._state.DialogsPage}
                                                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.MUSIC} element={<Music/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    )
}


