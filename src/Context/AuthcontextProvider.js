import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';

// context api make as AuthContext
export const AuthContext = createContext();

//set auth for use firebase
const auth = getAuth(app);

// send children as a props
// To give access AuthContext to use 
// all the AuthcontextProvider under component
const AuthcontextProvider = ({ children }) => {

    // check user State start
    const [user, setUser] = useState(null);
    // check user State end


    // 3rd party login operation perform start
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // 3rd party login operation perform end


    // Authenticate with Firebase using Password-Based Accounts start
    // create new user, signIn and signOut operation perform
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }
    // Authenticate with Firebase using Password-Based Accounts end

    //Check inside auth state change by side effect start
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])
    //Check inside auth state change by side effect end

    const AuthInfo = { user, providerLogin, createUser, signIn, logOut };
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthcontextProvider; 