import React from 'react'
import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';
import { CiPlay1 } from "react-icons/ci";
import { RiMoreLine } from "react-icons/ri";

const TrailerBackground = ({movie_id}) => {

  const trailer = useSelector(state => state.movies.trailer);
    useTrailer(movie_id);
    if(trailer === null) return ;
    
  return (
    <div>
      <iframe
      width="560" 
      height="315" 
      src={"https://www.youtube.com/embed/"+trailer?.key}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
      <CiPlay1 className='text-6xl text-black rounded-full border border-black p-4 m-4'/>
      <RiMoreLine className='text-6xl text-black rounded-full border border-black p-4 m-4 '/>
    </div>
  )
}

export default TrailerBackground