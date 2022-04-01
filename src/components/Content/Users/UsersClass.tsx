import React from "react";
import s from "./Users.module.css";
import avatar from "../../../assets/images/user.png";
import axios from "axios";
import {UsersContainerType} from "./UsersContainer";



export class UsersClass extends React.Component<UsersContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){

        return (
            <div>
                {this.props.usersPage.users.map(f =>

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
                                <button onClick={() => this.props.unfollow(f.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(f.id)}>Follow</button>}
                        </div>
                    </div>)}
            </div>
        )
    }
}
