import {useEffect, useReducer} from 'react'
import { AppContext } from "./context";
import reducer from "../Reducer/reducer";

const API = 'http://hn.algolia.com/api/v1/search?';
const initialState = {
    isLoading:true,
    query:"html",
    nbPages:0,
    hits:[],
    page:0
}


// create Provider
const AppProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState);

    const fetchAPI = async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    // remove post
    const removePost = (id)=>{
        dispatch({
            type:"REMOVE_POST",
            payload:id
        })
    }

    useEffect(()=>{
        fetchAPI(`${API}query=${state.query}&page=${state.page}`);
    },[])


    return <AppContext.Provider value={{...state,removePost}}>{children}</AppContext.Provider>
}

export default AppProvider;