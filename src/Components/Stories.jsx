import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context/context';

const Stories = () => {
    const name = useGlobalContext();

    const isLoading = false;

    const API = 'http://hn.algolia.com/api/v1/search?query=react';

    const fetchAPI = async (url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchAPI(API);
    },[])

    if(isLoading){
        return <>
            <h1>Loading.....</h1>
        </>
    }
  return (
    <div>
        <h1>My News {name}</h1>
    </div>
  )
}

export default Stories