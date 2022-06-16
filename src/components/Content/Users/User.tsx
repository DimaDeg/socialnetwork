import React from "react";
import s from './Users.module.css'
import avatar from '../../../assets/images/user.png'
import {InitialUsersType, UsersType} from "../../../Redux/reducers/users-reducer";

type UserType = {
    User: UsersType
    follow: (id:number) => void
    unfollow: (id:number) => void
    UsersPage: InitialUsersType
}

export const User: React.FC<UserType> = ({User,follow,unfollow,UsersPage}) => {
    const {name, status, photos,id,followed} = User
    return (<div className={s.element}>
            <div><img className={s.avatar} src={photos.small ? photos.small : avatar} alt={name}/></div>
            <span>
                        <span>{name}</span>
                        <span>{status}</span>
                    </span>

            <span>
                        <span>{"f.location.city"}</span>
                        <span>{"f.location.country"}</span>
                    </span>
            <div>
                {followed ?
                    <button disabled={UsersPage.followingProgress.some(someId => someId === id)} onClick={() => {
                        console.log('11')
                        unfollow(id)
                    }}>Unfollow</button> :
                    <button disabled={UsersPage.followingProgress.some(someId => someId === id)} onClick={() => {
                        follow(id)
                    }}>Follow</button>}
            </div>
        </div>
    )

}
