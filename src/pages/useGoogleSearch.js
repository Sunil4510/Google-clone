import { useEffect, useState } from 'react'
import API_KEY from './keys';
const CONTEXT_KEY = "88c3d10b64c05ddae";
const useGoogleSearch = (term) => {
    const [data,setdata] = useState(null);
    useEffect(() => {
        const fetchdata = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result =>{
                setdata(result);
            })
        }
         fetchdata();
    }, [term])
    return {data}
};


export default useGoogleSearch
