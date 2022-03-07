import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navigate/Navbar";
import {Profile} from "./components/Content/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Content/News/News";
import {Music} from "./components/Content/Music/Music";
import {Settings} from "./components/Content/Settings/Settings";
import {DialogsPageType, ProfilePageType} from "./Redux/State";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";

type AppType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    addPost: () => void
    updatePostText: (text: string) => void
    sendMessage: () => void
    updateMessageText: (message: string) => void
}

export const App: React.FC<AppType> = (props) => {

    return (

        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/Profile'} element={<Profile ProfilePage={props.ProfilePage}
                                                               addPost={props.addPost}
                                                               updatePostText={props.updatePostText}/>}/>
                    <Route path={'/Dialogs'} element={<Dialogs DialogsPage={props.DialogsPage}
                                                               updateMessageText={props.updateMessageText}
                                                               sendMessage={props.sendMessage}/>}/>
                    <Route path={'/News'} element={<News/>}/>
                    <Route path={'/Music'} element={<Music/>}/>
                    <Route path={'/Settings'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    )
}


