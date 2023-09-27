import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {

    const id = localStorage.getItem('id') || null;
    const token = localStorage.getItem('token') || null;
    const [idInstance, setIdInstance] = useState(id);
    const [apiTokenInstance, setApiTokenInstance] = useState(token);


    return (
        <AuthContext.Provider value={{ idInstance, setIdInstance, apiTokenInstance, setApiTokenInstance }}>
            {children}
        </AuthContext.Provider>
    );
}
