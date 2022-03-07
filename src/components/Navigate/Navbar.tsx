import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (

        <nav className={s.nav}>
            <div>
                <NavLink to={'/Profile'} className={f => f.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/Dialogs'} className={f => f.isActive ? s.active : s.item}>Massages</NavLink>
            </div>
            <div>
                <NavLink to={'/News'} className={f => f.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/Music'} className={f => f.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/Settings'} className={f => f.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    )

}
