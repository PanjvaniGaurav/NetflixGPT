import { useEffect } from 'react';
import { API_Options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieClips } from '../utils/moviesSlice';
  // Replace with your actual API key

const useRelatedClips = (movie_id) => {
  const dispatch = useDispatch();

    const fetchClips = async () => {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos",API_Options);
        const data = await response.json();
        if(data === null) return;
        const clips = data.results.filter((video) => video.type !== 'Trailer');
        dispatch(addMovieClips(clips));
        console.log(clips);
      } catch (error) {
        console.error("Error fetching related clips: ", error);
      }
    };
  useEffect(() => {
    fetchClips();
  }, []);
};

export default useRelatedClips;
