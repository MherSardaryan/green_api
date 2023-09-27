import React, { useContext, useEffect, useState } from "react";
import { ClientContext } from "./ClientContext";
import { Service } from "../http/ApiService";
import { AuthContext } from "./AuthContext";

export default function ClientProvider({ children }) {
    const [isAuth, setIsAuth] = useState(null);
    const { idInstance, apiTokenInstance } = useContext(AuthContext)
    useEffect(() => {
        Service.getAccount({ idInstance, apiTokenInstance })
            .then(data => {
                console.log(data);
                localStorage.setItem('id', idInstance);
                localStorage.setItem('token', apiTokenInstance);
                setIsAuth(true)
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [idInstance, apiTokenInstance])

    return (
        <ClientContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </ClientContext.Provider>
    );
}
