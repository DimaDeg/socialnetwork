import reportWebVitals from './reportWebVitals';
import {State, subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendMessage, updateMessageText, updatePostText} from "./Redux/State";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                ProfilePage={State.ProfilePage}
                DialogsPage={State.DialogsPage}
                addPost={addPost}
                updatePostText={updatePostText}
                sendMessage={sendMessage}
                updateMessageText={updateMessageText}
            />
        </BrowserRouter>
        , document.getElementById('root')
    )
}

rerenderEntireTree()
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
