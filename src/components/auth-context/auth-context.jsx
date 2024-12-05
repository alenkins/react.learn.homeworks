import {AuthContext} from "./index.js";
import {useState} from "react";

export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState({isAuth: false});
    const toggleAuth = () => {
        setAuth((prev) => prev.isAuth ? {isAuth: false} : {isAuth: true, name: "Анна"});
    };

    return <AuthContext.Provider value={{auth, toggleAuth}}>{children}</AuthContext.Provider>;
}