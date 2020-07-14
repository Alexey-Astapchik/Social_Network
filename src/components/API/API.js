import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': 'f15d5cf2-fb90-4123-8192-232f533c994a'
    }
})

export const usersAPI = {

    getUsers (currentPage = 1, pageSize =  10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)   
                .then(response => {
                    return response.data;
                });
    },

    follow (friendID) {
        return instance.post(`follow/${friendID}`)
    },

    unfollow (friendID) {
        return instance.delete(`follow/${friendID}`)
    },
    getProfile (userId) {
        return instance.get(`Profile/` + userId);        
    }
}

export const authAPI = {

    me () {
        return instance.get(`auth/me`, { withCredentials: true })
    }
}
