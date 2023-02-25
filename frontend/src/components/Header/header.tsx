import { useNavigate } from 'react-router-dom'
import React from 'react'
import './header.scss'

function Header () {
    
    //let navigate = useNavigate();

    return (
        <header className='border-b-4'>
          <div className='content p-5 text-center grid grid-cols-1 sm:grid-cols-3 gap-x-1'>
            <div className='element  text-3xl text-black dark:text-white inline'>Home</div>
            <div className='element  text-3xl text-black inline '>About</div>
            <div className='element  text-3xl text-black inline'>Resources</div>
          </div>
        </header>
    )
}

export default Header