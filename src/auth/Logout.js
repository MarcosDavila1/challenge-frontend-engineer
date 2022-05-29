import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/Logout.css'

function Logout() {

    const { logout } = useAuth0()

  return (
    <div>
        <button className='btnLogout' onClick={()=> logout({returnTo: process.env.REACT_APP_RETURN_TO})}>
            Logout
        </button>
    </div>
  )
}

export default Logout