import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/api/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();
  console.log(reviews)
    
  useEffect(() => {
    getReviews(movieId)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId])


  return (
    <div>
      {reviews.length !== 0 && (
        <ul>
          {reviews &&
            reviews.map(review => (
              <li>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
        </ul>
      )}

      {reviews.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;