import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from './components/Navigate/Navbar';
import {Navigate, Route, Routes} from 'react-router-dom';
import {News} from './components/Content/News/News';
import {Music} from './components/Content/Music/Music';
import {Settings} from './components/Content/Settings/Settings';
import UsersContainer from './components/Content/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Content/Login/login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {CustomWithRouter} from './HOC/withRouter';
import {initializeApp} from './Redux/reducers/app-reducer';
import {AppStateType} from './Redux/ReduxStore';
import {Preloader} from './components/Content/Common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Content/Profile/ProfileContainer'))

export const PATH = {
    PROFILE: '/Profile/',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings',
    USERS: '/Users',
    LOGIN: '/login',
    404: '/404'
}

type AppType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<AppType> {



    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={PATH.PROFILE} element={<ProfileContainer/>}/>
                            <Route path={'/Profile/:userId'} element={<ProfileContainer/>}/>
                            <Route path="/" element={<Navigate to="/profile" />} />
                            <Route path={PATH.DIALOGS} element={<DialogsContainer/>}/>
                            <Route path={PATH.USERS} element={<UsersContainer/>}/>
                            <Route path={PATH.NEWS} element={<News/>}/>
                            <Route path={PATH.MUSIC} element={<Music/>}/>
                            <Route path={PATH.SETTINGS} element={<Settings/>}/>
                            <Route path={PATH.LOGIN} element={<Login/>}/>
                            <Route path={'*'} element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </Suspense>
                </div>

            </div>

        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.App.initialized
    }
}

export default compose<React.ComponentType>(CustomWithRouter, connect(mapStateToProps, {initializeApp}))(App)

