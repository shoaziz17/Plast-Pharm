import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();


const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [admin, setAdmin] = useState(false)

    const logOut = () => {
        localStorage.removeItem('Email');
        setCurrentUser(null)
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('Email'));
        user ? setCurrentUser(user) : setCurrentUser(null);
    }, [])

    const value = { currentUser, setCurrentUser, logOut, setAdmin, admin };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;