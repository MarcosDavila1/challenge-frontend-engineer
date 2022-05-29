import React from 'react'
import Login from '../auth/Login'
import '../styles/LandingPage.css'
import Slogan from './Slogan'

function LandingPage() {
  return (
    <div className='containerLanding'>
        <Slogan />
        <Login />
    </div>
  )
}

export default LandingPage