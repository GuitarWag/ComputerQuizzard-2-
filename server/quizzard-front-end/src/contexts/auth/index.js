import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { noop } from 'lodash';
import { login, register, me } from "../../services/auth";

const INITIAL_VALUES = {
    user: null,
    loginStart: noop,
    logoutStart: noop,
    registerStart: noop,
    loading: false,
}

const AuthContext = createContext(INITIAL_VALUES);

const useAuthContextInitialValue = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const loginStart = useCallback(async (email, password) => {
        setLoading(true);
        const user = await login(email, password);
        setLoading(false);
        setUser(user);
        return user;
    }, [setLoading, setUser])

    const registerStart = useCallback(async (name, email, password) => {
        setLoading(true);
        const user = await register(name, email, password);
        setLoading(false);
        setUser(user);
        return user;
    }, [setLoading, setUser])

    const sessionStart = useCallback(async () => {
        const data = await me();
        setUser(data);
    }, [setUser])

    useEffect(() => {
        sessionStart();
    }, [sessionStart])

    return {
        user,
        loginStart,
        registerStart,
        loading,
    }
}

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const value = useAuthContextInitialValue();
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
