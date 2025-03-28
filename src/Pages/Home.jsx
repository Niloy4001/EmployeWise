import React from 'react'
import banner from '../assets/banner.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
        <img src={banner} alt="" className='w-full h-lvh'/>
        <div className='flex justify-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Link to={"/login"} className='btn'>Log In</Link>
            <Link to={"/users"} className='btn'>All Users</Link>
        </div>
    </div>
  )
}

export default Home