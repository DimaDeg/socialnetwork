import s from "../../Users/Users.module.css";
import preloader from "../../../../assets/images/loader.svg";
import React from "react";

export const Preloader = () => {
    return <div className={s.loading}><img src={preloader} alt={''}/></div>
}