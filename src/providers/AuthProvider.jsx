import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // create
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // signOut
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
    return () =>{
        return unsubscribe();
    }
    },[])




    const authInfo={
        user,
        loading,
        createUser,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;