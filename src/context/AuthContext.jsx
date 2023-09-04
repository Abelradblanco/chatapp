/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useState, useContext } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {auth} from "../firebase";

//create context
const AuthContext = createContext() ;
//Provider context
export  const AuthProvider = ({children }) => {
    const[currentUser, setCurrentUser, ] = useState(null);

    //sign in with google
    const signinWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }


    const value = {
        currentUser ,setCurrentUser, signinWithGoogle
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
