import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

export const usersAPI = {

    getUsers (currentPage = 1, pageSize =  10) {

    return axios.get(baseURL + `users?page=${currentPage}&count=${pageSize}`
            // {
            //     withCredentials: true
            // }
        ) 
        .then(response => {
            return response.data;
        })
    }
}


