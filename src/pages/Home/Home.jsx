import { useState, useEffect } from "react";
import { HomeList } from "components/HomeList/HomeList";
import { getMovies } from "components/api/api";

 const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      getMovies()
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setMovies(data.results); // Припускаючи, що 'results' - це масив фільмів
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return <div>
        <h1>
            Home
        </h1>
        <HomeList movies={movies}/>
  </div>;
};

export default Home;