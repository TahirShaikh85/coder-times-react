import {useState,useEffect} from 'react';

const useDebounce = (inputValue,delay = 400) => {
    const [debounceValue,setDebounceValue] = useState(inputValue);

    useEffect(()=>{
       let timer = setTimeout(()=>setDebounceValue(inputValue),delay);

       return ()=>{
        clearTimeout(timer);
       }
    },[inputValue,delay])

  return debounceValue;
}

export default useDebounce