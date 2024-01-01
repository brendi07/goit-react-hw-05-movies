import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "components/api/api";

const Cast = () => {
  const [cast, setCast] = useState([])
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <ul>
        {cast &&
          cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;