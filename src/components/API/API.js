import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1808933c-205a-4711-8372-d6fe62a8ec95'
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
        console.warn("Obsolere method")
        return profileAPI.getProfile(userId);       
    },
}


export const profileAPI = {

    getProfile (userId) {
        return instance.get(`Profile/` + userId);        
    },
    getStatus (userId) {
        return instance.get(`Profile/Status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`Profile/Status`, { status: status });
    }
}

export const authAPI = {

    me () {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout () {
        return instance.delete(`auth/ogin`);
    }
}
