import React, { createContext } from 'react';

// context api make as AuthContext
export const AuthContext = createContext();

// send children as a props
// To give access AuthContext to use 
// all the AuthcontextProvider under component
const AuthcontextProvider = ({ children }) => {

    const user = { name: 'batash ali' };

    const AuthInfo = { user };
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthcontextProvider; 