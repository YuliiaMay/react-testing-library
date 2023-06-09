import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";
import { Wrapper, Container, Image, MovieTitle, MovieInfo, ReleaseDate, Score, Subtitle, Overview, Genres, GenresItem, Genre, AdditionalContainer, InfoList, InfoItem, StyledNavLink, GoBackLink } from "./MovieDetails.styled";
import defaulMovieImage from '../../images/default-movie.jpg';
import Loader from "components/Loader/Loader";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');


    useEffect(() => {
        async function getMovie(movieId) {
            const movie = await fetchMovieDetails(movieId);
            setMovie(movie);
            setGenres(movie.genres)
        }
        getMovie(movieId);
    }, [movieId]);

    return (
        
            movieId && (
                <Wrapper>
                    <GoBackLink to={backLinkHref.current}>Go Back
                    </GoBackLink>
                    <Container>
                        <Image src={
                            movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : defaulMovieImage}
                            alt={movie.original_title} />
                        <MovieInfo>
                            <MovieTitle>
                                <span>{movie.original_title}</span>
                                <ReleaseDate>   ({movie.release_date && movie.release_date.slice(0, 4)})  </ReleaseDate>
                            </MovieTitle>
                            <Score>User Score - {movie.vote_average}</Score>
                            <div>
                                <Subtitle>Overview</Subtitle>
                                <Overview>{movie.overview}</Overview>
                            </div>
                            <div>
                                <Subtitle>Genres</Subtitle>
                                <Genres>
                                    {
                                        genres.map(({id, name}) =>
                                            <GenresItem key={id}>
                                                <Genre>{name}</Genre>
                                            </GenresItem>
                                        )
                                    }
                                </Genres>
                            </div>
                        </MovieInfo>
                    </Container>
                    <AdditionalContainer>
                        <Subtitle>Additional information</Subtitle>
                        <InfoList>
                            <InfoItem><StyledNavLink to="cast" >Cast</StyledNavLink></InfoItem>
                            <InfoItem><StyledNavLink to="reviews">Review</StyledNavLink></InfoItem>
                    </InfoList>
                    </AdditionalContainer>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Wrapper>
            )
        
        
    )
};

export default MovieDetails;