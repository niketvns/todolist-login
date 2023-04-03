import React, { createContext, useContext, useState } from 'react';

const alertContext = createContext()

const AlertProvider = ({ children }) => {
    const [isAlert, setAlert] = useState({
        open: false,
        message: '',
        type: 'success'
    });


    return (
        <alertContext.Provider value={{ isAlert, setAlert }}>
            {children}
        </alertContext.Provider>
    )

}

const useAlert = () => useContext(alertContext);

export { AlertProvider, useAlert };