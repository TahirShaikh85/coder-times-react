// context
// Provider
// useContext()

import React,{createContext,useContext} from "react";

// create Context
const AppContext = createContext();

// create Provider
const AppProvider = (({children})=>{
    return <AppContext.Provider value="Tahir Shaikh">{children}</AppContext.Provider>
})

// create custome hook
const useGlobalContext = (()=>{
    return useContext(AppContext)
})

export {
    AppContext,
    AppProvider,
    useGlobalContext
}
