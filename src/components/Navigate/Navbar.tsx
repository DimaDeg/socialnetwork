import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

export const Navbar = () => {

    return (

        <nav className={s.nav}>

            <div >
                <NavLink to={PATH.PROFILE} className={f => f.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={PATH.DIALOGS} className={f => f.isActive ? s.active : s.item}>Massages</NavLink>
            </div>
            <div>
                <NavLink to={PATH.NEWS} className={f => f.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={PATH.MUSIC} className={f => f.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={PATH.SETTINGS} className={f => f.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    )

}
