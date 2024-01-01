// import { Link } from "react-router-dom";
import { List, ListLink } from "./HomeList.styled";

export const HomeList = ({ movies }) => {
      return (
        <div>
          <List>
            {movies.map(movie => (
              <li key={movie.id}>
                <ListLink to={`/movies/${movie.id}`}>{movie.title}</ListLink>
              </li>
            ))}
          </List>
        </div>
      );
}