import React from 'react'
import { useGlobalContext } from '../Context/context'

const Pagination = () => {
  const {page,nbPages,getPrevPage,getNextPage} = useGlobalContext();
  return (
    <div className='pagination'>
      <button onClick={()=>getPrevPage()}>Prev</button>
      <p>{page + 1} of {nbPages}</p>
      <button onClick={()=>getNextPage()}>Next</button>
    </div>
  )
}

export default Pagination