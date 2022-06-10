import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    follow,
    getUsers,
    InitialUsersType,
    setActivePage,
    unfollow,
} from "../../../Redux/users-reducer";
import React from "react";
import {UsersClass} from "./UsersClass";
import {Preloader} from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {getUsersPages} from "../../../Redux/users-selector";


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
        this.props.getUsers(this.props.usersPage.currentPage,this.props.usersPage.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setActivePage(page)
        this.props.getUsers(page,this.props.usersPage.pageSize)
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

// const mapStateToProps = (state: AppStateType): MapStateType => {
//     return {
//         usersPage: state.UsersPage,
//         isFetching: state.UsersPage.isFetching
//     }
// }
const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        usersPage: getUsersPages(state)
    }
}



export default compose(connect(mapStateToProps, {
    follow,unfollow,setActivePage, getUsers
}))(UsersContainer)




