import { USERS_API } from "../../api";

export const register = async (name, email, password) => {
    const response = await USERS_API.post('/register', {
        name,
        email,
        password,
    })
    return response.data;
}

export const login = async (email, password) => {
    const response = await USERS_API.post('/login', {
        email,
        password,
    })
    return response.data;
}

export const me = async () => {
    const response = await USERS_API.get('/me')
    return response.data;
}
