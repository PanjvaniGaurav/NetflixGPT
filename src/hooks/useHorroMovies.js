import { useDispatch } from "react-redux";
import { API_Key, API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorroMovies = () => {
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+API_Key+"&with_genres=27", API_Options);
      const data = await response.json();
      dispatch(addHorrorMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorroMovies;
