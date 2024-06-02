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