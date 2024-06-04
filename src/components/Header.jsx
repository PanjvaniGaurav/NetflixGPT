import React, { useEffect } from 'react'
import { LogoURL, usericon } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate('/browse')
        } else {
            dispatch(removeUser())
            navigate('/')
        }
      });
},[])

  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
      navigate('/error')
      console.log(error)
    });
  }

  return (
<div className='absolute px-10 py-3 bg-gradient-to-b from-black w-full z-50 flex justify-between'>   
<img className='w-32' src={LogoURL} alt='Logo'/>
  {user && (
    <div className='flex items-center'>
      <h3 className='text-white text-lg mr-4 font-semibold text-shadow'>
        Welcome, {user.displayName !== null ? user.displayName : 'User'}
      </h3> 
      <img className='h-10 w-10 rounded-full mr-4 border-2 border-white' src={usericon} alt='User Icon'/>
      <button onClick={handleSignout} className='bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors'>
        Sign Out
      </button>
    </div>
  )}
</div>
  )
}

export default Header