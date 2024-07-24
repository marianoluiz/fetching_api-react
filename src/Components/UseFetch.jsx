
import { useEffect, useState } from "react";

const UseFetch = (url) => {
    
    const[data, setData] = useState();

    useEffect(() => {
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    }, [])

    return [data]; // Returning an array containing data
}

export default UseFetch
