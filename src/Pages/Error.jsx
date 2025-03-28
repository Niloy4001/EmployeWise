import React from 'react'
import errorImg from '../assets/404.png'
import { Link, useNavigate } from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-lvh relative'>
        <img src={errorImg} className='w-full h-full' alt="" />
        <div className='absolute top-[10%] left-[10%]'>
            <button className='btn bg-purple-800 text-white' onClick={()=>navigate(-1)}>Take me away</button>
        </div>
    </div>
  )
}

export default Error