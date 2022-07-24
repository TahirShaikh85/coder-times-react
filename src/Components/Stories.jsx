import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context/context';

const Stories = () => {
    const {hits,isLoading} = useGlobalContext();

    if(isLoading){
        return <>
            <h1>Loading.....</h1>
        </>
    }
  return (
    <div>
       {
        hits.map((currElem)=>{
            return <h5>{currElem.title}</h5>
        })
       }
    </div>
  )
}

export default Stories