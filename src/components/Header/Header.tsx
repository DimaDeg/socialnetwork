import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderType = {
    login: string | null
    isAuth: boolean
}

export const Header:React.FC<HeaderType> = (props) =>{
    return(
        <header>
            <div className={s.header}>
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/78px-Logo_TV_2015.svg.png' alt={''}
                />
                <div className={s.loginBlock}>
                    {props.isAuth ? <a>{props.login}</a> :
                        <NavLink to={'/login'}><a>Login</a></NavLink>}
                </div>
            </div>
        </header>
    )
}