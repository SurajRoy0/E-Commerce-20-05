import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token, email) => { },
    logout: () => { },
});

export const AuthContextProvider = (props) => {
    const storedUserAuth = JSON.parse(localStorage.getItem("user-auth-token"));
    const [token, setToken] = useState(storedUserAuth?.token || "");
    const userIsLoggedIn = !!token;

    const loginHandler = (token, email) => {
        setToken(token);
        localStorage.setItem(
            "user-auth-token",
            JSON.stringify({ token: token, email: email })
        );
    };

    const logoutHandler = () => {
        setToken("");
        localStorage.removeItem("user-auth-token");
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
