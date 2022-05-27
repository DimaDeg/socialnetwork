import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    followUser,
    InitialUsersType,
    setActivePage,
    setUsers, setUsersCount, toggleIsFetching,
    unfollowUser,
    UsersType
} from "../../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import {UsersClass} from "./UsersClass";
import {Preloader} from "../Common/Preloader/Preloader";

export type MapStateType = {
    usersPage: InitialUsersType,
}

type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setActivePage: (currentPage: number) => void
    setUsersCount: (totalCount: number) => void
    toggleIsFetching: () => void
}

export type UsersContainerType = MapStateType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetching()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching()
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching()
        this.props.setActivePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching()
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <UsersClass onPageChanged={this.onPageChanged}
                        usersPage={this.props.usersPage}
                        follow={(id: number) => this.props.followUser(id)}
                        unfollow={(id: number) => this.props.unfollowUser(id)}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        usersPage: state.UsersPage,
    }
}


export default connect(mapStateToProps, {setUsers, followUser, unfollowUser,
    setActivePage, setUsersCount, toggleIsFetching})(UsersContainer)




