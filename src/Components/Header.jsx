import React from 'react'
import logo from '../img/logo.png'

const Header = (props) => {
  return (
    <div className={`flex items-center ${props.className}`}>
         <img src={logo} />  
         <h1 className='text-white border-transparent border-2 border-l-zinc-400 mx-4 px-4'>QUEM É QUEM EM WESTEROS</h1>
    </div>
  )
}

export default Header