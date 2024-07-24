
import React from 'react'
import UseFetch from './UseFetch'

const FetchYogaData = () => {
    
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);

    return (
        <>
            <ul className='list_data_main'>
                <h1 className='usefetch_heading'>Yoga Api Data</h1>
                {data && data.map((e) => (

                    <li className='list_data'>
                        <h1>{e.name}</h1>
                        <p><strong>Benefits: </strong>{e.benefits}</p>
                        <p><strong>Time Duration: </strong>{e.time_duration}</p>
                    </li>

                ))}
            </ul>
        </>
    )

}

export default FetchYogaData