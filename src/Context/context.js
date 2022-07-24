// context
// Provider
// useContext()

import {createContext,useContext} from "react";

// create Context
const AppContext = createContext();

// create custome hook
const useGlobalContext = (()=>{
    return useContext(AppContext)
})
export {
    AppContext,
    useGlobalContext
}
