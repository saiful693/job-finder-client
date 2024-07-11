import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

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
     // log in with google
     const logInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
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
        logInWithGoogle,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;