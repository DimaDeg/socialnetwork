import React from 'react';
import './App.css';
import {Navbar} from "./components/Navigate/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Content/Login/login";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";


export const PATH={
    PROFILE: '/Profile/',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings',
    USERS: '/Users',
    LOGIN: '/login'
}

export const App = () => {

    return (

        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={PATH.PROFILE} element={<ProfileContainer/>}/>
                    <Route path={'/Profile/:userId'} element={<ProfileContainer/>}/>
                    <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                    <Route path={PATH.USERS} element={<UsersContainer/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.MUSIC} element={<Music/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                </Routes>
            </div>

        </div>

    )
}


