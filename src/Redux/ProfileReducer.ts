import {ActionTypesType} from "./State";

export type PostType = {
    id: number
    post: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}


const initialState = {
    posts: [
        {id: 1, post: 'First Post', likeCount: 15},
        {id: 2, post: 'Second Post', likeCount: 20}
    ],
    newPostText: ''
}


export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionTypesType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCount: 0
            };
            return  {...state,newPostText:'',posts: [newPost,...state.posts,]}

        }
        case 'UPDATE-POST-TEXT': {
            return  {...state,newPostText: action.text}
        }
        default :
            return state
    }
}
export const AddPostAC = () => ({
    type: 'ADD-POST',
} as const)

export const UpdatePostTextAC = (text: string) => ({
    type: 'UPDATE-POST-TEXT',
    text
} as const)

