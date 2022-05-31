import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    followUser,
    InitialUsersType,
    setActivePage,
    setUsers, setUsersCount, toggleIsFetching,
    toggleIsFollowing,
    unfollowUser,
    UsersType
} from "../../../Redux/users-reducer";
import React from "react";
import {UsersClass} from "./UsersClass";
import {Preloader} from "../Common/Preloader/Preloader";
import {userAPI} from "../../../API/UserAPI";


export type MapStateType = {
    usersPage: InitialUsersType,
    isFetching: boolean
}

type mapDispatchToPropsType = {
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setActivePage: (currentPage: number) => void
    setUsersCount: (totalCount: number) => void
    toggleIsFetching: () => void
    toggleIsFollowing: (id: number, isFetching: boolean) => void
}


export type UsersContainerType = MapStateType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersContainerType> {


    componentDidMount() {
        this.props.toggleIsFetching()
        userAPI.getUser(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching()
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching()
        this.props.setActivePage(page)
        userAPI.getUser(page, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching()
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <UsersClass onPageChanged={this.onPageChanged}
                        usersPage={this.props.usersPage}
                        follow={(id: number) => this.props.followUser(id)}
                        unfollow={(id: number) => this.props.unfollowUser(id)}
                        toggleIsFollowing={(id: number, isFetching: boolean) => this.props.toggleIsFollowing(id, isFetching)}
                        isFetching={false}            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        usersPage: state.UsersPage,
        isFetching:state.UsersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    setUsers, followUser, unfollowUser,
    setActivePage, setUsersCount, toggleIsFetching, toggleIsFollowing
})(UsersContainer)




