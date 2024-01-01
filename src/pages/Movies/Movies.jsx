import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "components/api/api";
import { MovieSearch } from "components/MovieSearch/MovieSearch";
import { MovieSearchList } from "components/MoviesSearchList/MoviesSearchList";

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName) {
      getSearchMovie(movieName)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [movieName]);

    const handleSearch = name => {
        const nextParams = name !== "" ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <h1>Movies</h1>
      <MovieSearch value={movieName} onSearch={handleSearch} />
      <MovieSearchList movies={movies} />
    </div>
  );
};

export default Movies;