import React from 'react'
import Header from './Header'
import { BackgroundURL } from '../utils/constants'

const Login = () => {
return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BackgroundURL} alt="Background Image" />
        </div>
        <form className='flex absolute flex-col w-3/12 my-48 mx-auto left-0 right-0 p-12 text-white bg-black rounded-md bg-opacity-80'>
            <h1 className='m-2 font-bold text-3xl py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-3 my-3 w-full bg-neutral-700    '/>
            <input type='password' placeholder='Password' className='p-3 my-3 w-full bg-neutral-700'/>
            <button className='bg-red-600 my-4 p-2 w-full text-lg rounded-md'>Sign In</button>
        </form>
    </div>
)
}

export default Login