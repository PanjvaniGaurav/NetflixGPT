import { useDispatch } from "react-redux";
import { API_Key, API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addRomanticMovies } from "../utils/moviesSlice";

const useRomanticMovies = () => {
  const dispatch = useDispatch();

  const getRomanticMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key="+API_Key+"&with_genres=10749", API_Options);
      const data = await response.json();
      dispatch(addRomanticMovies(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getRomanticMovies();
  }, []);
};

export default useRomanticMovies;
