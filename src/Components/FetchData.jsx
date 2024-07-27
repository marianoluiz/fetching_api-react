import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchData = () => {


    /* put in the array the data */
    /* useFetch is a component aka custom hook */

    /* Use array to store the obj */
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    /* displays the data inside the array */
    console.log(data);

    /* data looks like this: {}, {}, {}, {} */


  return (
    <>
     <ul className='list_data_main'>
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        {data && data.map((e)=>(
            <>
            <li className='list_data'>
                <h3>{e.name}</h3>
                <img src={e.image}></img>
                <p><strong>Importance: </strong>{e.importance}</p>
                <p><strong>Benefits: </strong>{e.benefits}</p>
                <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
            
            </>
        ))}
     </ul>
    </>
  )
}

export default FetchData