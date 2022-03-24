import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigate/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import {StoreType} from "./Redux/State";
import { DialogsContainer } from './components/Content/Dialogs/DialogsContainer';

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
                    <Route path={PATH.PROFILE} element={<Profile store={props.store}/>}/>
                    <Route path={PATH.DIALOGS} element={<DialogsContainer store={props.store}/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.MUSIC} element={<Music/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    )
}


