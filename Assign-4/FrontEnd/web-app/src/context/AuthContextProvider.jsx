import { createContext, useState } from "react";

export const AuthContext=createContext();

export function AuthContextProvider({children}) {
    const [authDetails,setAuthDetails]=useState({
        isLoggedIn:false,
        token:null,
    });
    
    const login=(token)=>{
        setAuthDetails({
            isLoggedIn:true,
            token:token,
        })
    }

    return(<AuthContext.Provider value={{authDetails,login}}>
            {children}
        </AuthContext.Provider>)
}