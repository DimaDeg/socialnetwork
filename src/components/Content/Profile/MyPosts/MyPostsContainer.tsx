import {AddPostAC, PostType, UpdatePostTextAC} from "../../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../Redux/ReduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: PostType[]
    postText: string
}
type DispatchToPropsType = {
    addPost:()=>void
    updatePostText:(text:string)=>void
}
export type MyPostsPageType = MapStateToPropsType & DispatchToPropsType

const mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        posts: state.ProfilePage.posts,
        postText: state.ProfilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:Dispatch):DispatchToPropsType => {
    return {
        addPost: ()=>dispatch(AddPostAC()),
        updatePostText: (text)=>dispatch(UpdatePostTextAC(text))
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
