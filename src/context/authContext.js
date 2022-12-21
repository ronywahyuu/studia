import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [fetching, setFetching] = useState(false);

    // const isTeacher = user?.is_teacher

    // const location = window.location.pathname;

    // const role = isTeacher ? 'Teacher' : 'Student';
    const notifyError = () => toast.error("Username atau password salah");

    const location = window.location;

    const login = async (values) => {
        console.log(values);
        setFetching(true);
        setFetching(true);
        try {
          await axios
            .post("https://studia.deta.dev/users/login", values)
            .then((res) => {
              const token = res.data.access_token;
              localStorage.setItem("token", token);
              setIsAuthenticated(true)
              setFetching(false);
              window.location.href = "/h/dashboard";
            });
        } catch (err) {
          console.log(err);
          notifyError();
          setFetching(false);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    const isStudent =  user?.isStudent;
    const isTeacher = user?.isTeacher;

    // console.log(isStudent, isTeacher)
    const roles = () =>{
        if (user?.isTeacher) {
            return 'Teacher'
        } 
        
        if (user?.isStudent ) {
            return 'Student'
        }
    }
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            const res = await axios.get("https://studia.deta.dev/users/current?image=true", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const { data } = res.data;
            setUser(data);

            // clean up
            return () =>{
                setUser(null);
            }
            // console.log(data);
        };
        if (localStorage.getItem("token")) {
            fetchUser();
        }
    }, [location.pathname]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                fetching,
                isAuthenticated,
                setIsAuthenticated,
                login,
                logout,
                roles,
                isStudent,
                isTeacher,
                notifyError
            }}
        >
            {children}
            {/* {isAuthReady && children} */}
        </AuthContext.Provider>
    );
}