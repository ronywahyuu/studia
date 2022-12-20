import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { useLocation } from 'react-router-dom';

export const KelasContext = createContext();

export const KelasContextProvider = ({ children }) => {
    const { roles } = useContext(AuthContext)
    const [classes, setClasses] = useState([]);
    const [ownClasses, setOwnClasses] = useState([])
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // const NUMBER = 12345;
    // const location = useLocation();
    const location = window.location;

    const getOwnClasses = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/kelas/current_owner", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            //   setClasses(res.data.msg);
              setOwnClasses(res);
            setLoading(false);
            console.log(res);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const fetchClasses = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`/kelas/joined/current?populate=%2A`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const { data } = res.data;
            setClasses(data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            if (roles() === "Teacher") {
                getOwnClasses();
            }

            if (roles() === "Student") {
            }
            fetchClasses();
            // console.log(`is teacher: ${isTeacher}`)
        }
    }, [location.pathname]);

    // console.log(`kelasContext roles: ${roles()}`)
    // console.log(ownClasses)

    return (
        <KelasContext.Provider value={{
            classes,
            setClasses,
            ownClasses,
            setOwnClasses,
            loading,
            fetchClasses,
            setLoading
        }}>
            {children}
        </KelasContext.Provider>
    );
}