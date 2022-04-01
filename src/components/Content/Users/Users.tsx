/*
import React from "react";
import {UsersContainerType} from "./UsersContainer";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../../assets/images/user.png'


export const Users: React.FC<UsersContainerType> = (props) => {
    const getUsers = () => {
        if (props.usersPage.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (

        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.usersPage.users.map(f =>

                <div className={s.element} key={f.id}>
                    <div><img className={s.avatar} src={f.photos.small ? f.photos.small : avatar} alt={f.name}/></div>
                    <span>
                        <span>{f.name}</span>
                        <span>{f.status}</span>
                    </span>

                    <span>
                        <span>{"f.location.city"}</span>
                        <span>{"f.location.country"}</span>
                    </span>
                    <div>
                        {f.followed ?
                            <button onClick={() => props.unfollow(f.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(f.id)}>Follow</button>}
                    </div>
                </div>)}
        </div>
    )

}
*/
