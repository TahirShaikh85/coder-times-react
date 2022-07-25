
const reducer = (state,action)=>{
    switch (action.type) {
        case "SET_LOADING":{
            return{
                ...state,
                isLoading:true
            }
        }
        case "GET_STORIES":
          return{
            ...state,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
            isLoading:false
          }
        case "REMOVE_POST":
          return{
            ...state,
            hits:state.hits.filter((curElem)=> curElem.objectID !== action.payload )
            
          }
    
        default:
          return {
            ...state
          }
    }
}

export default reducer;