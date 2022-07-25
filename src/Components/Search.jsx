import React from 'react'
import { useGlobalContext } from '../Context/context'

const Search = () => {
  const {searchPost,query} = useGlobalContext();
  return (
    <div className='search-form'>
      <h1>Coder Times</h1>
      <form >
        <input className='search-box' type="text" placeholder='Search News..' value={query} onChange={(e)=>searchPost(e.target.value)} />
      </form>
    </div>
  )
}

export default Search