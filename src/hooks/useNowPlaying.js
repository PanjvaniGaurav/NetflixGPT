import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_Options);
      const data = await response.json();
      dispatch(addNowPlaying(data.results));
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlaying;
