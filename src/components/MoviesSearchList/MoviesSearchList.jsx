import {  useLocation } from "react-router-dom";
import { List, ListLink } from "./MovieSearchList.styled";

export const MovieSearchList = ({ movies }) => {
      const location = useLocation();
   return (
     <div>
       <List>
         {movies.map(movie => (
           <li key={movie.id}>
             <ListLink to={`/movies/${movie.id}`} state={{ from: location }}>
               {movie.title}
             </ListLink>
           </li>
         ))}
       </List>
     </div>
   );
}