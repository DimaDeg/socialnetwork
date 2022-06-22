import s from "./Users.module.css";
import React from "react";
import {InitialUsersType} from "../../../Redux/reducers/users-reducer";
import {Paginator} from "./Paginator";
import {User} from "./User";
import {Link} from "react-router-dom";


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
        <Paginator totalCount={usersPage.totalUsersCount} pageSize={usersPage.pageSize}
                   onPageChanged={onPageChanged} currentPage={usersPage.currentPage} partitionSize={10}/>
        <div className={s.users}>
            {usersPage.users.map(f => <div><Link to={`/profile/${f.id}`}>
                <User key={f.id}
                       UsersPage={usersPage}
                       follow={follow}
                       User={f}
                       unfollow={unfollow}/>
            </Link></div>)}
        </div>
    </div>
}