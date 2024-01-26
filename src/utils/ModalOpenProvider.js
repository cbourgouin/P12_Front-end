import React, { useState, createContext } from 'react'
export const ModalOpenContext = createContext();
export const ModalOpenProvider = ({children}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return <ModalOpenContext.Provider value={{
        modalOpen, setModalOpen
    }}>
        {children}
    </ModalOpenContext.Provider>
}
