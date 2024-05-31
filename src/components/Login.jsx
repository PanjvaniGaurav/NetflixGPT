import React, { useRef, useState } from 'react'
import Header from './Header'
import { BackgroundURL } from '../utils/constants'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignIn,SetIsSignIn] = useState(true)
    const [errMessage,SetErrMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

    const toggleForm = () => {
        SetIsSignIn(!isSignIn)
    }

    const handleButtonClick = () =>{
        const message = checkValidData(email.current.value,password.current.value)
        SetErrMessage(message)
    }

return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BackgroundURL} alt="Background Image" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='flex absolute flex-col w-3/12 my-48 mx-auto left-0 right-0 p-10 text-white bg-black rounded-lg bg-opacity-80'>
            <h1 className='mb-2 font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

            {!isSignIn &&
                <input type='text' placeholder='Username' className='p-3 my-3 w-full bg-neutral-700'/>
            }
            <input type='text' placeholder='Email Address' ref={email} className='p-3 my-3 w-full bg-neutral-700'/>
            <input type='password' placeholder='Password' ref={password} className='p-3 my-3 w-full bg-neutral-700'/>
            <p className='text-red-600 font-semibold text-[13.5px] py-2'>{errMessage}</p>
            <button className='bg-red-600 my-4 p-2 w-full text-lg rounded-md' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

            <div className='flex'>
                <p className='text-gray-400 mx-2'>{isSignIn ? "Already a User? " : "New to Netflix?"}</p>
                <span className='cursor-pointer' onClick={toggleForm}>{isSignIn ? "Sign In" : "Sign Up Now"}</span>
            </div>

        </form>
    </div>
)
}

export default Login