import Link from 'next/link'
import React from 'react'

type NavbarProps = {}

const Navbar : React.FC<NavbarProps>= () => {
  return (
    <div className='flex items-center justify-between sm:px-12 px-2 md:px-24 font-[family-name:var(--font-geist-sans)]'>
        <Link href="/" className="flex items-center justify-center h-20">
            <p className='h-full'>Leetcode</p>
        </Link>
        <div>
            <button className='bg-white text-indigo-800 to-blue-600 px-2 py-1 sm:px-4 rounded-md text-sm font-medium 
            hover:text-orange-700 hover:bg-white duration transition duration-200 ease-in-out
            font-[family-name:var(--font-geist-sans)]'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar