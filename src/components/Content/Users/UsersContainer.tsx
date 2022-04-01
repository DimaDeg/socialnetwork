import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {FollowUserAC, InitialUsersType, SetUsersAC, UnfollowUserAC, UsersType} from "../../../Redux/UsersReducer";
import {Dispatch} from "redux";
import {UsersClass} from "./UsersClass";

type MapStateType = {
    usersPage: InitialUsersType
}

type mapDispatchToPropsType = {
    follow: (id:number)=>void
    unfollow: (id:number)=>void
    setUsers: (users: UsersType[])=>void
}

export type UsersContainerType = MapStateType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateType => {
  return {
      usersPage: state.UsersPage
  }


}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
  return{
      setUsers:(users:UsersType[])=>dispatch(SetUsersAC(users)),
      follow:(id)=>dispatch(FollowUserAC(id)),
      unfollow:(id)=>dispatch(UnfollowUserAC(id))
  }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersClass)