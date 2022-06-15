import {addPostAC, PostType} from "../../../../Redux/reducers/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostType[]
}
type DispatchToPropsType = {
    addPost:(text:string)=>void
}
export type MyPostsPageType = MapStateToPropsType & DispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        posts: state.ProfilePage.posts
    }
}

const mapDispatchToProps = (dispatch:Dispatch):DispatchToPropsType => {
    return {
        addPost: (text)=>dispatch(addPostAC(text)),
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
