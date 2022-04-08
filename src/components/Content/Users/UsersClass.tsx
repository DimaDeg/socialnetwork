import React from "react";
import s from "./Users.module.css";
import avatar from "../../../assets/images/user.png";
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";


export class UsersClass extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    onChangePage = (page:number) => {
        this.props.setActivePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        //let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        let pagesCount = 20

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(f =>
                        <span onClick={()=>this.onChangePage(f)}
                              className={this.props.usersPage.currentPage === f ? s.selectPage : s.page}>
                            {f}
                        </span>
                    )}

                </div>
                {this.props.usersPage.users.map(f =>

                    <div className={s.element} key={f.id}>
                        <div><img className={s.avatar} src={f.photos.small ? f.photos.small : avatar} alt={f.name}/>
                        </div>
                        <span>
                            <span>{f.name}</span>
                            <span>{f.status}</span>
                        </span>
                        <div>
                            {f.followed ?
                                <button onClick={() => this.props.unfollow(f.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(f.id)}>Follow</button>}
                        </div>
                    </div>)}
            </div>
        )
    }
}
