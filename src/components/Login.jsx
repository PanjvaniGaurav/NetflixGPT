import React, { useRef, useState } from 'react'
import Header from './Header'
import { BackgroundURL } from '../utils/constants'
import { checkValidData } from '../utils/validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [isSignIn,SetIsSignIn] = useState(true)
    const [errMessage,SetErrMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const username = useRef(null)

    const toggleForm = () => {
        SetIsSignIn(!isSignIn)
    }

    const handleButtonClick = () =>{
        const message = checkValidData(email.current.value,password.current.value)
        SetErrMessage(message)

        if(message) return;

        if(!isSignIn){
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user)
              email.current.value = ""
              password.current.value = ""
              username.current.value = "" 
              navigate('/browse')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              SetErrMessage(errorCode + " : " + errorMessage)
            });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => { 
                const user = userCredential.user;
                email.current.value = ""
                password.current.value = ""
                console.log(user)
                navigate('/browse') 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errMessage)
                SetErrMessage(errorCode + " : " + errorMessage)
            });
        }
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
                <input type='text' placeholder='Username' ref={username} className='p-3 my-3 w-full bg-neutral-700'/>
            }
            <input type='text' placeholder='Email Address' ref={email} className='p-3 my-3 w-full bg-neutral-700'/>
            <input type='password' placeholder='Password' ref={password} className='p-3 my-3 w-full bg-neutral-700'/>
            <p className='text-red-600 font-semibold text-[13.5px] py-2'>{errMessage}</p>
            <button className='bg-red-600 my-4 p-2 w-full text-lg rounded-md' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

            <div className='flex'>
                <p className='text-gray-400 mx-2'>{isSignIn ? "New to Netflix? " : "Already a User?"}</p>
                <span className='cursor-pointer' onClick={toggleForm}>{isSignIn ? "Sign Up Now" : "Sign In"}</span> 
            </div>

        </form>
    </div>
)
}

export default Login