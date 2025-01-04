import Auth from '@/components/Auth'
import Navbar from '@/components/Navbar'
import React from 'react'

type AuthenticationPageProps = {}

const AuthenticationPage : React.FC<AuthenticationPageProps>= () => {
  return (
    <div className='h-screen relative bg-gradient-to-r from-indigo-800 to-blue-600'>
        <div className="max-w-7xl mx-auto">
            <Navbar/>
        </div>
        <Auth/>
    </div>
  )
}

export default AuthenticationPage