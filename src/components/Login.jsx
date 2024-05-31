import React, { useState } from 'react'
import Header from './Header'
import { BackgroundURL } from '../utils/constants'

const Login = () => {

    const [isSignIn,SetIsSignIn] = useState(true)
    const toggleForm = () => {
        SetIsSignIn(!isSignIn)
    }

return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BackgroundURL} alt="Background Image" />
        </div>
        <form className='flex absolute flex-col w-3/12 my-48 mx-auto left-0 right-0 p-10 text-white bg-black rounded-lg bg-opacity-80'>
            <h1 className='mb-2 font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

            {!isSignIn &&
                <input type='text' placeholder='Username' className='p-3 my-3 w-full bg-neutral-700'/>
            }
            <input type='text' placeholder='Email Address' className='p-3 my-3 w-full bg-neutral-700'/>
            <input type='password' placeholder='Password' className='p-3 my-3 w-full bg-neutral-700'/>
            <button className='bg-red-600 my-4 p-2 w-full text-lg rounded-md'>{isSignIn ? "Sign In" : "Sign Up"}</button>

            <div className='flex'>
                <p className='text-gray-400 mx-2'>{isSignIn ? "Already a User? " : "New to Netflix?"}</p>
                <span className='cursor-pointer' onClick={toggleForm}>{isSignIn ? "Sign In" : "Sign Up Now"}</span>
            </div>
        </form>
    </div>
)
}

export default Login