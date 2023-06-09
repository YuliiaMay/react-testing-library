import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/movies-api";
import { ReviewsContainer, ReviewsErrMessage, Review, Content, Author, Date } from "./Reviews.styled";


const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        async function getReview(movieId) {
            const data = await fetchMovieReviews(movieId);
            setMovieReviews(data.results);
        };

        getReview(movieId);


    }, [movieId])

    return (
        <ReviewsContainer>
            {
                (movieReviews.length !== 0)
                    ? (
                        <ul>
                            {
                                movieReviews.map(({ id, author, content, updated_at }) => {
                                    const publishDate = updated_at.slice(0, 10);

                                    return (
                                        <Review key={id}>
                                            <Content>{content}</Content>
                                            <Author>Author name:  {author}</Author>
                                            <Date>Published: {publishDate}</Date>
                                        </Review>
                                    )
                                })
                            }
                        </ul>
                    )
                    : <ReviewsErrMessage>Unfortunately we have not found reviews 😞</ReviewsErrMessage>
            }
        </ReviewsContainer>
    )
};

export default Reviews;