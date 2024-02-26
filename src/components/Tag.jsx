import React, { useState } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner';

export default function Tag() {
  // const [gif, setGif]= useState(null)
  //  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState('car')

    const {gif, loading, fetchData} =useGif(tag)
  return (
    <div className='w-2/4 h-auto bg-blue-500 border border-black rounded-lg flex flex-col items-center  px-12'>
      <h1 className='uppercase underline font-bold text-2xl my-5
      '>{tag} Gif </h1>
      
      {
      loading ? <Spinner/> :<img src={gif} width={450}  alt ='Random Gif'/>
      }
      
      <input type="text" name="" className='w-10/12 px-2 py-2 rounded-lg text-lg mt-3 my-1' id="" onChange={(event)=>setTag(event.target.value)} value={tag} />

      <button className='bg-green-300 mx-auto text-center w-full font-semibold text-lg p-4 rounded-lg my-4 ' onClick={()=>fetchData(tag)}> GENERATE</button>
    </div>
  )
}
