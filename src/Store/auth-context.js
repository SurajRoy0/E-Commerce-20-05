import React, { useState } from "react"

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = props => {
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    const loginHandler = token => {
        setToken(token)
    }

    const logoutHandler = token => {
        setToken(null)
    }
    console.log(token)

    const constextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={constextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
