import React from 'react'

import '../App.css'
import { useApp } from '../hooks/useApp'

function Navbar() {
    const { user,changeUser} = useApp()
    
    return (
        <header className='nav'>
            <h1 className='logo'>NETFLITZ</h1>
            <nav className='menu-options'>
                {!user && 
                    <div className='auth_options'>
                        <button className='nav__btn'>Register</button>
                        <button className='nav__btn' onClick={() => {changeUser('Sid')}}>Sign in</button>
                    </div>
                }
                {user && 
                    <div className='auth_options'>
                        <span className='user_info'>Welcome, {user}</span>
                        <button className='nav__btn' onClick={() => {changeUser(null)}}>Log out</button>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar