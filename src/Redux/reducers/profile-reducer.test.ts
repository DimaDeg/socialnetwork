import {addPostAC, deletePost, ProfilePageType, ProfileReducer} from "./profile-reducer";

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'First Post', likeCount: 15},
        {id: 2, post: 'Second Post', likeCount: 20}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

it('new post should be added', () => {
        //test data
        let action = addPostAC('test')


        //2.action

        let newState = ProfileReducer(initialState, action)

        //3.expectation
        expect(newState.posts[0].post).toBe('test')
    }
)

it('length of post should be 3', () => {
        //test data
        let action = addPostAC('test')

        //2.action

        let newState = ProfileReducer(initialState, action)

        //3.expectation
        expect(newState.posts.length).toBe(3)
    }
)

it('after delete should be decrement', () => {
        //test data
        let action = deletePost(1)

        //2.action

        let newState = ProfileReducer(initialState, action)

        //3.expectation
        expect(newState.posts.length).toBe(2)
    }
)
