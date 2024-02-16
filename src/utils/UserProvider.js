import React, { useState, createContext } from 'react'
export const UtilisateurContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);

    return <UtilisateurContext.Provider value={{
        user, setUser
    }}>
        {children}
    </UtilisateurContext.Provider>
}
