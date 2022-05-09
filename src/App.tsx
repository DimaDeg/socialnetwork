import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigate/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import { DialogsContainer } from './components/Content/Dialogs/DialogsContainer';
import {UsersContainer} from "./components/Content/Users/UsersContainer";
import {ProfileContainer} from "./components/Content/Profile/ProfileInfo/ProfileContainer";


export const PATH={
    PROFILE: '/Profile/:userId?',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings',
    USERS: '/Users'
}

export const App = () => {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={PATH.PROFILE} element={<ProfileContainer/>}/>
                    <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                    <Route path={PATH.USERS} element={<UsersContainer/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.MUSIC} element={<Music/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    )
}

