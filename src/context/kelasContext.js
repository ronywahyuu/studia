import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const KelasContext = createContext();

export const KelasContextProvider = ({ children }) => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                console.log(data);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchClasses();
    }, []);

    return (
        <KelasContext.Provider value={{
            classes,
            setClasses,
            loading,
            setLoading,
        }}>
            {children}
        </KelasContext.Provider>
    );
}