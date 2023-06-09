import { CardLink, Card, Image, CardMovieInfo, Title, Rating } from "./MovieCard.styled";
import { Outlet, useLocation} from "react-router-dom";
import { Suspense } from "react";
import PropTypes from 'prop-types';
import defaulMovieImage from '../../images/default-movie.jpg';

const MovieCard = ({ movieId, src, title, rating }) => {
    const movieImg = `https://image.tmdb.org/t/p/w500${src}` ?? '/src/default.jpg';
    const location = useLocation();

    return (
        <Card>
            <CardLink to={`/movies/${movieId}`} state={{ from: location }} >
                <Image src={
                    src
                        ? movieImg
                        : defaulMovieImage
                }
                    alt={title} />
                <CardMovieInfo>
                    <Title>{title}</Title>
                    <Rating>Rating: {rating}</Rating>
                </CardMovieInfo>
            </CardLink>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Card>
    )
};

MovieCard.propTypes = {
    movieId: PropTypes.number.isRequired,
    src: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};


export default MovieCard;