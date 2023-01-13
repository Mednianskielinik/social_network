import {instance} from "./instance";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}

export const followUser = (userId) => {
    return instance.post(`follow/${userId}`).then(response => response.data);
}

export const unfollowUser = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data);
}