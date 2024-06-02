import React from 'react'
import { LogoURL, usericon } from '../utils/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }
  return (
    <div className='absolute px-10 py-3 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
        <img className='w-44' src={LogoURL} alt='Logo'/>
        
          {user &&
          (<div className='flex justify-center items-center'>
          <h1 className='text-red-500 text-2xl mr-5'>Welcome {user.displayName !== null ? user.displayName : 'User'}</h1> 
          <img className='h-20' src={usericon} alt='User Icon'/>
          <button onClick={handleSignout} className='bg-red-600 text-white px-3 py-1 rounded-lg h-14'>Sign Out</button>
           </div>
          )}
        
    </div>
  )
}

export default Header