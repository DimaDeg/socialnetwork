
let rerenderEntireTree = () =>{

}

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    avatar: string
    id: number
    name: string
}

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
}

export type FriendsType = {
    avatar: string
    id: number
    name: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    /*    Sidebar: SidebarType*/
}

export let State: RootStateType = {

    ProfilePage: {
        posts: [
            {id: 1, post: 'First Post', likeCount: 15},
            {id: 2, post: 'Second Post', likeCount: 20}
        ],
        newPostText: ''
    },

    DialogsPage: {
        dialogs: [
            {avatar: 'https://publicdomainvectors.org/tn_img/Male-Avatar-2.webp', id: 1, name: 'Dima'},
            {avatar: 'https://download-cs.net/steam/avatars/3447.jpg', id: 2, name: 'Vasya'},
            {avatar: 'https://download-cs.net/steam/avatars/3446.jpg', id: 3, name: 'Petya'},
            {avatar: 'https://download-cs.net/steam/avatars/3404.jpg', id: 4, name: 'Senya'},
            {avatar: 'https://download-cs.net/steam/avatars/3117.jpg', id: 5, name: 'Lesya'}
        ],
        messages: [
            {id: 1, message: 'dqweqwrq'},
            {id: 2, message: 'fsdfas'},
            {id: 3, message: 'tyer'},
            {id: 4, message: 'hdsfbxc'},
            {id: 5, message: 'ooretw'}
        ],
        newMessage: ''
    }
    /*    ,
        Sidebar: {
            friends: [
                {avatar: 'https://download-cs.net/steam/avatars/3447.jpg', id: 2, name: 'Kirill'},
                {avatar: 'https://download-cs.net/steam/avatars/3446.jpg', id: 3, name: 'Kostya'},
                {avatar: 'https://download-cs.net/steam/avatars/3404.jpg', id: 4, name: 'Andrey'},
            ]
        }*/

}

export const updatePostText = (text: string) => {
    State.ProfilePage.newPostText = text
    rerenderEntireTree()
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        post: State.ProfilePage.newPostText,
        likeCount: 0
    };
    State.ProfilePage.posts.push(newPost)
    State.ProfilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateMessageText = (message:string)=>{
    State.DialogsPage.newMessage = message
    rerenderEntireTree()
}

export const sendMessage = () => {
    const newMessage: MessageType={
        id: new Date().getTime(),
        message: State.DialogsPage.newMessage
    };
    State.DialogsPage.messages.push(newMessage)
    State.DialogsPage.newMessage = ''
    rerenderEntireTree()
}

export const subscribe = (observer:()=>void) => {
    rerenderEntireTree = observer
}