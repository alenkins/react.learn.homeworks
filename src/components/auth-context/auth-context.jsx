import {AuthContext} from "./index.js";
import {useState} from "react";

export const AuthContextProvider = ({children}) => {
    const [name, setName] = useState();
    const isAuth = !!name;

    return <AuthContext.Provider value={{name, setName, isAuth}}>{children}</AuthContext.Provider>;
}