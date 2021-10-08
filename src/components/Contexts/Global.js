import React, { createContext, useState } from 'react'

export const Global = createContext();
const GlobalProvider = ({children}) => {
    const [user, setUser] = useState();
    const handler=() =>{
        console.log('logout');
    }
    return (
        <Global.Provider value={{user, setUser}}>
            {children}
        </Global.Provider>
    )
}

export default GlobalProvider
