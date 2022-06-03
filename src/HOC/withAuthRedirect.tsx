import React from "react";
import {Navigate} from "react-router-dom";
import { AppStateType } from "../Redux/ReduxStore";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({isAuth: state.Auth.isAuth})


export const withAuthRedirect = <P extends object>(Component:React.ComponentType<P>):React.FC<P> => {
    const WithRedirect: React.FC<MapStatePropsType> =({isAuth,...props}) =>{
        if(!isAuth) return <Navigate to={'/login'}/>
        return <Component {...props as P}/>
    }
    return connect(mapStateToProps)(WithRedirect)
}

