import s from "./Users.module.css";
import React from "react";
import {InitialUsersType} from "../../../Redux/reducers/users-reducer";
import {Paginator} from "./Paginator";
import {User} from "./User";
import {Link} from "react-router-dom";
import avatar from "../../../assets/images/user.png"


type UsersClassType = {
    onPageChanged: (page: number) => void
    usersPage: InitialUsersType
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const UsersClass: React.FC<UsersClassType> = ({
                                                         onPageChanged,
                                                         usersPage,
                                                         follow,
                                                         unfollow
                                                     }) => {

    return <div className={s.back}>
        <Paginator totalCount={usersPage.totalUsersCount} pageSize={usersPage.totalUsersCount}
                   onPageChanged={onPageChanged} currentPage={usersPage.currentPage}/>
        <div className={s.users}>
            {usersPage.users.map(f => <div><Link to={`/profile/${f.id}`}>
                <img src={f.photos.small ? f.photos.small : avatar} alt={f.name}/>
            </Link>< User key={f.id}
                          UsersPage={usersPage}
                          follow={follow}
                          User={f}
                          unfollow={unfollow}/></div>)}
        </div>
    </div>
}