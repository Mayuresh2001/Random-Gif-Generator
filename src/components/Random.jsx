import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from "../hooks/useGif"

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;


export default function Random() {
  const {gif , loading, fetchData}=useGif();
  return (
    <div className='w-2/4 h-auto bg-green-500 border border-black rounded-lg flex flex-col items-center p-4 px-12'>
      <h1 className='uppercase underline font-bold text-2xl my-5
      '>Random Gif </h1>
      
      {loading ? <Spinner/> :<img src={gif} width={450} loading='eager' alt ='Random Gif'/>};
      
      <button className='bg-green-300 mx-auto text-center w-full font-semibold text-lg p-4 rounded-lg my-4  ' onClick={() =>fetchData()}> GENERATE</button>
    </div>
  )
}
