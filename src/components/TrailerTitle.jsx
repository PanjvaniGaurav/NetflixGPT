import React, { useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { RiMoreLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { setShowModal } from '../utils/moviesSlice';

const TrailerTitle = ({ title, overview }) => {
  const [readMore, setReadMore] = useState(false);
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setShowModal(true));
  };

  return (
    <div className='w-full h-[120%] pt-[20%] px-24 flex justify-between absolute text-white  z-40'>
      <div className='h-full'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-5/12'>
          {!readMore && overview.length > 200 ? overview.substring(0, 200) + "..." : (overview.length > 350 ? overview.substring(0, 350) + "..." : overview)}
        </p>
        <div className='flex'>
          <CiPlay1
            onClick={handlePlayClick}
            className='text-6xl text-black bg-white rounded-full border border-white p-4 mx-2 cursor-pointer hover:scale-110 hover:translate-y-[-5%] transition-all duration-300'
          />
          <RiMoreLine
            onClick={() => setReadMore(!readMore)}
            className='text-6xl text-white bg-neutral-700 rounded-full border border-white p-4 mx-2 cursor-pointer hover:scale-110 hover:translate-y-[-5%] transition-all duration-300'
          />
        </div>
      </div>
    </div>
  );
};

export default TrailerTitle;