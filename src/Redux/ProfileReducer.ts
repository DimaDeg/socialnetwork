import {ActionTypesType, PostType, ProfilePageType} from "./State";


export const ProfileReducer = (ProfilePage:ProfilePageType, action:ActionTypesType) => {
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

