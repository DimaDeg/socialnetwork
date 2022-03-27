import React from "react";
import s from "./Header.module.css"

export const Header = () =>{
    return(
        <header>
            <div className={s.header}>
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/78px-Logo_TV_2015.svg.png' alt={''}
                />
            </div>

        </header>
    )
}