import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

export const Navbar = () => {
    const cln = ({isActive}: { isActive: boolean }) => isActive ? s.active : s.item;

    return (

        <nav className={s.nav}>

            <div>
                <NavLink to={PATH.PROFILE} className={cln}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={PATH.DIALOGS} className={cln}>Massages</NavLink>
            </div>
            <div>
                <NavLink to={PATH.USERS} className={cln}>Users</NavLink>
            </div>
            <div>
                <NavLink to={PATH.NEWS} className={cln}>News</NavLink>
            </div>
            <div>
                <NavLink to={PATH.MUSIC} className={cln}>Music</NavLink>
            </div>
            <div>
                <NavLink to={PATH.SETTINGS} className={cln}>Settings</NavLink>
            </div>
        </nav>
    )

}
