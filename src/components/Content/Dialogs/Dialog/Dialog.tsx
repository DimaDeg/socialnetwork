import s from "./dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../../Redux/DialogsReducer";

export const Dialog: React.FC<DialogType> = (props) => {

    return (
        <div>
                <NavLink to={'dialogs/' + props.id} className={s.item}>
                    <img src={props.avatar} alt={props.name}/>
                    {props.name}
                </NavLink>

        </div>
    )
}