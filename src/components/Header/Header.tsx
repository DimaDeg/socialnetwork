import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../Redux/reducers/auth-reducer";

type HeaderType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

export const Header: React.FC<HeaderType> = (props) => {

    const dispatch = useDispatch();

    const LogOut = () => {
        dispatch(logout())
    }

    return (
        <header>
            <div className={s.header}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/78px-Logo_TV_2015.svg.png'
                    alt={''}
                />
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>
                            <text>{props.login}</text>
                            <button onClick={LogOut}>logout</button>
                        </div> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}