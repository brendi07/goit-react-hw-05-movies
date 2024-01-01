
export const getMovies =  () => {
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzAxOGExMDllYzkyY2JkZDY5ZDY2NGRiNGU0MThlMiIsInN1YiI6IjY1OGYxZDE3ODFjN2JlNWYzNDcyM2NjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwiqGaw1TcLGcJ6jzniy4fcIoa_vqmoQY3Qc9K70OjQ',
   },
 };

  return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
};

export const getSearchMovie = (query) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzAxOGExMDllYzkyY2JkZDY5ZDY2NGRiNGU0MThlMiIsInN1YiI6IjY1OGYxZDE3ODFjN2JlNWYzNDcyM2NjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwiqGaw1TcLGcJ6jzniy4fcIoa_vqmoQY3Qc9K70OjQ',
      },
    };

    return fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
}

export const getMoviesById = (movieId) => {
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzAxOGExMDllYzkyY2JkZDY5ZDY2NGRiNGU0MThlMiIsInN1YiI6IjY1OGYxZDE3ODFjN2JlNWYzNDcyM2NjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwiqGaw1TcLGcJ6jzniy4fcIoa_vqmoQY3Qc9K70OjQ',
   },
 };

return fetch(
  `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
  options
); 
};

export const getCast = (movieId) => {
     const options = {
       method: 'GET',
       headers: {
         accept: 'application/json',
         Authorization:
           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzAxOGExMDllYzkyY2JkZDY5ZDY2NGRiNGU0MThlMiIsInN1YiI6IjY1OGYxZDE3ODFjN2JlNWYzNDcyM2NjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwiqGaw1TcLGcJ6jzniy4fcIoa_vqmoQY3Qc9K70OjQ',
       },
     };
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
}

export const getReviews = movieId => {
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization:
       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzAxOGExMDllYzkyY2JkZDY5ZDY2NGRiNGU0MThlMiIsInN1YiI6IjY1OGYxZDE3ODFjN2JlNWYzNDcyM2NjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwiqGaw1TcLGcJ6jzniy4fcIoa_vqmoQY3Qc9K70OjQ',
   },
    };
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}}/reviews?language=en-US&page=1`,
      options
    );
};


