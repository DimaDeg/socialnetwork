import React from "react";
import s from "./Post.module.css"
import {PostType} from "../../../../../Redux/State";


export const Post: React.FC<PostType> = (props) => {

    return (
        <div className={s.item}>
            <img src='https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp' alt={props.post}/>
            <span key={props.id}>{props.post}</span>
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    )
}
