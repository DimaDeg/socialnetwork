import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../../Redux/ProfileReducer";


export const Post: React.FC<PostType> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp' alt={props.post}/>
            <div className={s.post} key={props.id}>{props.post}</div>
            <div>
                <span className={s.like}>Like {props.likeCount}</span>
            </div>
        </div>
    )
}
