import React from 'react';
import { useGlobalContext } from '../Context/context';

const Stories = () => {
    const {hits,isLoading,removePost} = useGlobalContext();

    if(isLoading){
        return <>
            <h1>Loading.....</h1>
        </>
    }
  return (
    <div className='stories-div'>
       {
        hits.map((currElem)=>{
          const {title,author,objectID,url,num_comments} = currElem;

            return <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>By <span>{author}</span> | <span>{num_comments} comments</span></p>
              <div className="card-button">
                <a href={url} target="_blank" style={{color:'#34495e'}}>Read More</a>
                <a onClick={()=>removePost(objectID)} href="#">Remove</a>
              </div>
            </div>
        })
       }
    </div>
  )
}

export default Stories