import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Suspense } from 'react';
import { getMoviesById } from 'components/api/api';
import { StyledLink } from './MovieDetails.styled';

 const MovieDetails = () => {
    const defaultImg =
      'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const [movie, setMovie] = useState({})
  const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/'); 

    useEffect(() => {
       getMoviesById(movieId)
         .then(response => {
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           return response.json();
         })
         .then(data => {
           setMovie(data); 
         })
         .catch(error => {
           console.log(error);
         });
   },[movieId])

  return (
    <div>
      <h1>Movie Details</h1>
      <StyledLink to={backLinkHref.current}>Back</StyledLink>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <h1>{movie.title}</h1>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {movie.genres &&
            movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
        </p>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;