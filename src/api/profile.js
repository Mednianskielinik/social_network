import {instance} from "./instance";

export const auth = () => {
    return instance.get(`auth/me`).then(response => response.data)
};

export const login = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
};

export const logout = () => {
    return instance.delete(`auth/login`).then(response => response.data)
};

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`).then(response => response.data);
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
}

export const updateStatus = (status) => {
    return instance.put(`profile/status`, {status: status}).then(response => response.data);
}

export const saveUserPhoto = (photoFile) => {
    let formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo`, formData, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    }).then(response => response.data);
}