import {useEffect, useReducer} from 'react'
import { AppContext } from "./context";
import reducer from "../Reducer/reducer";

const API = 'http://hn.algolia.com/api/v1/search?';
const initialState = {
    isLoading:true,
    query:"",
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

    // search post 
    const searchPost = (searchQuery)=>{
        dispatch({
            type:"SEARCH_QUERY",
            payload:searchQuery
        })
    }

    // next page
    const getNextPage = ()=>{
        dispatch({
            type:"NEXT_PAGE",
        })
    }

    // prev Page
    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGE",
        })
    }

    useEffect(()=>{
        fetchAPI(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page])


    return <AppContext.Provider value={{...state,removePost,searchPost,getNextPage,getPrevPage}}>{children}</AppContext.Provider>
}

export default AppProvider;