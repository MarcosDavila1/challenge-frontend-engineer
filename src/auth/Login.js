import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../styles/Login.css'

function Login() {

    const { loginWithRedirect } = useAuth0();
    
  return (
    <button className='btnLogin' onClick={()=> loginWithRedirect()}>
        Login
    </button>
  )
}

export default Login