import axios from "axios";

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '9e4ce4f2-ec33-407e-962e-bd5adcbf0eb5'
        }
    }
)
export const userAPI = {
    getUser(page: number = 1, pageSize: number) {
        return instance.get(`users?page=${page}&count=${pageSize}`,
            {withCredentials: true})
            .then(res => res.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    unfollow(id: number) {
        return instance.delete(`unfollow/${id}`)
            .then(res => res.data)
    }
}