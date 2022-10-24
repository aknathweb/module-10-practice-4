import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    /* to catch auth/user information after browser refresh
    because user information have been update from sideEffect 
    so to resolved the sideEffect promise need some time
    to handle sideEffect delay time, here I have used loader */
    const [loading, setLoading] = useState(true);


    // 3rd party login operation perform start
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // 3rd party login operation perform end


    // Authenticate with Firebase using Password-Based Accounts start
    // create new user, signIn and signOut operation perform
    const createUser = (email, password) => {
        // for currentUser set sideEffect delay
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        // for currentUser set sideEffect delay
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        // for currentUser set sideEffect delay
        setLoading(true);
        return signOut(auth);
    }
    // Authenticate with Firebase using Password-Based Accounts end

    // updateProfile firebase function use to set user name and image
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // sendEmailVerification firebase function use to verification user email
    const verificationUserEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    /*  Check inside auth state change by side effect 
     and share auth or user information with all component to use
     start */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);
            setUser(currentUser);
            // after set the currentUser information, stop the loading by setLoading(false)
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])
    /*  Check inside auth state change by side effect 
     and share auth or user information with all component to use
     end */

    //  send AuthInfo as a props of AuthContext to access all component
    const AuthInfo = { user, providerLogin, createUser, signIn, logOut, loading, updateUserProfile, verificationUserEmail };
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthcontextProvider; 