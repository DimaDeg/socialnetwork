import {ActionTypesType, PostType} from "./State";

const initialState = {
    posts: [
        {id: 1, post: 'First Post', likeCount: 15},
        {id: 2, post: 'Second Post', likeCount: 20}
    ],
    newPostText: ''
}


export const ProfileReducer = (ProfilePage=initialState, action: ActionTypesType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                post: action.text,
                likeCount: 0
            };
            ProfilePage.posts.push(newPost)
            ProfilePage.newPostText = ''
            return ProfilePage

        case 'UPDATE-POST-TEXT':
            ProfilePage.newPostText = action.text
            return ProfilePage

        default :
            return ProfilePage
    }
}
export const AddPostAC = (text: string) => ({
    type: 'ADD-POST',
    text
} as const)

export const UpdatePostTextAC = (text: string) => ({
    type: 'UPDATE-POST-TEXT',
    text
} as const)

