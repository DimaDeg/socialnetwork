import s from "./Users.module.css";
import avatar from "../../../assets/images/user.png";
import React from "react";
import {InitialUsersType} from "../../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersClassType = {
    onPageChanged: (page: number) => void
    usersPage: InitialUsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const UsersClass: React.FC<UsersClassType> = ({onPageChanged, usersPage, follow, unfollow}) => {

    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(f =>
                <span onClick={() => onPageChanged(f)}
                      className={usersPage.currentPage === f ? s.selectPage : s.page}>
                            {f}
                        </span>
            )}

        </div>
        {usersPage.users.map(f =>

            <div className={s.element} key={f.id}>

                <NavLink to={`/profile/${f.id}`}>
                    <div><img className={s.avatar} src={f.photos.small ? f.photos.small : avatar} alt={f.name}/>
                    </div>
                </NavLink>
                <span>
                            <span>{f.name}</span>
                            <span>{f.status}</span>
                        </span>
                <div>
                    {f.followed ?
                        <button onClick={() => unfollow(f.id)}>Unfollow</button> :
                        <button onClick={() => follow(f.id)}>Follow</button>}
                </div>
            </div>)}
    </div>
}