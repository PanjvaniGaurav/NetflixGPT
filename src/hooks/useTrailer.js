import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = (movie_id) => {
    const dispatch = useDispatch();
    const getTrailer = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos",API_Options);
        const data = await response.json();
        const trailers = data.results.filter((video) => video.type === 'Trailer');
        const trailer = trailers.length ? trailers[Math.floor(Math.random() * trailers.length)] : data.results[0];
        dispatch(addTrailer(trailer))
    }

    useEffect(()=>{
        getTrailer();
    },[])

    const trailer = useSelector(state => state.movies.trailer);
    if(trailer === null) return ;
}

export default useTrailer