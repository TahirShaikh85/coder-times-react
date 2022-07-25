
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true
      }
    }
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false
      }
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curElem) => curElem.objectID !== action.payload)

      }
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload
      }
    case "NEXT_PAGE":

     // prevent page num to become greater than 50
     let incrPage = state.page + 1;

     if(incrPage >= state.nbPages){
       incrPage = 0;
     }

      return {
        ...state,
        page: incrPage
      }

    case "PREV_PAGE":

      // prevent page num to become 0 and -ve integers
      let decPage = state.page - 1;
      if(decPage <= 0){
        decPage = 0;
      }

      return {
        ...state,
        page:decPage
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;