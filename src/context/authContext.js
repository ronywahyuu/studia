import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [fetching, setFetching] = useState(false);

    const isTeacher = user?.is_teacher

    const role = isTeacher ? 'Teacher' : 'Student';

    

    const login = async (user) => {
        try {
            const res = await axios.post(
                "/users/login",
                user
            );
            const { access_token } = res.data;
            console.log(access_token);
            localStorage.setItem("token", access_token);
            setIsAuthenticated(true);
            // return data;
        } catch (error) {
            if (error.response) {
                return error.response.data;
            } else {
                console.log(error);
            }
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get("/users/current?image=true", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const { data } = res.data;
            setUser(data);
        };
        if (localStorage.getItem("token")) {
            fetchUser();
        }
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                isAuthenticated,
                setIsAuthenticated,
                isAuthReady,
                setIsAuthReady,
                login,
                logout,
                role,
            }}
        >
            {children}
            {/* {isAuthReady && children} */}
        </AuthContext.Provider>
    );
}