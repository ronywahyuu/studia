import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';


export const TugasContext = createContext();

export const TugasContextProvider = ({ children }) => {
    const [tugasCtx, setTugasCtx] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [idLesson, setIdLesson] = useState();

    // var idLesson = 200

    const notifyUploadSuccess = () => toast.success("Task uploaded successfully");
    const notifyUploadError = () => toast.error("Task upload failed: Server Error");
    return (
        <TugasContext.Provider value={{ tugasCtx, notifyUploadSuccess, notifyUploadError, idLesson, setIdLesson, setTugasCtx, setLoading, error }}>
            {children}
        </TugasContext.Provider>
    )
}

