import s from "./Users.module.css";
import avatar from "../../../assets/images/user.png";
import React from "react";
import {InitialUsersType} from "../../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../API/UserAPI";

type UsersClassType = {
    onPageChanged: (page: number) => void
    usersPage: InitialUsersType
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    toggleIsFollowing: (id: number, isFetching: boolean) => void
}

export const UsersClass: React.FC<UsersClassType> = ({
                                                         onPageChanged,
                                                         usersPage,
                                                         follow,
                                                         unfollow,
                                                     }) => {

    let pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize)


    let pages = []
    for (let i = 1; i <= 20; i++) {
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
        {usersPage.users.map(f => <div className={s.element} key={f.id}>
            <NavLink to={`/profile/${f.id}`}>
                <img className={s.avatar} src={f.photos.large ? f.photos.large : avatar} alt={f.name}/>
            </NavLink>
            <span>
                            <span>{f.name}</span>
                            <span>{f.status}</span>
                        </span>
            <div>
                {f.followed ?
                    <button disabled={usersPage.followingProgress.some(id => id === f.id)} onClick={() => {
                        console.log('11')
                        userAPI.unfollow(f.id)
                            .then(res => {
                                    if (res.data.resultCode === 0) {
                                        unfollow(f.id)
                                    }
                                }
                            )

                        unfollow(f.id)
                    }}>Unfollow</button> :
                    <button disabled={usersPage.followingProgress.some(id => id === f.id)} onClick={() => {
                        userAPI.follow(f.id)
                            .then(res => {
                                if (res.resultCode === 0) {
                                    follow(f.id)
                                }
                            })
                        follow(f.id)
                    }}>Follow</button>}
            </div>
        </div>)}
    </div>
}