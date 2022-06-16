import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    follow,
    getUsers,
    InitialUsersType,
    setActivePage,
    unfollow,
} from "../../../Redux/reducers/users-reducer";
import React from "react";
import {UsersClass} from "./UsersClass";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {getUsersBySelector} from "../../../Redux/users-selector";


export type MapStateType = {
    usersPage: InitialUsersType
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setActivePage: (currentPage: number) => void
}


export type UsersContainerType = MapStateType & mapDispatchToPropsType

export class UsersContainer extends React.Component<UsersContainerType> {


    componentDidMount() {
        let {currentPage, pageSize} = this.props.usersPage
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (page: number) => {
        let {pageSize} = this.props.usersPage
        this.props.setActivePage(page)
        this.props.getUsers(page, pageSize)
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : null}
            <UsersClass onPageChanged={this.onPageChanged}
                        usersPage={this.props.usersPage}
                        follow={(id: number) => this.props.follow(id)}
                        unfollow={(id: number) => this.props.unfollow(id)}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        usersPage: getUsersBySelector(state)
    }
}


export default compose(connect(mapStateToProps, {
    follow, unfollow, setActivePage, getUsers
}))(UsersContainer)




