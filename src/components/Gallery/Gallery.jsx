import MovieCard from "components/MovieCard/MovieCard";
import { List } from "./Gallery.styled";
import PropTypes from 'prop-types';


const Gallery = ({ movies }) => {
    return (
        <List> 
            {
                movies.map(({ id, original_language, title, vote_average, poster_path, release_date }) => 
                    <MovieCard
                        key={id}
                        movieId={id}
                        src={poster_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                        release={release_date}
                    />
                )
            }
        </List>
    )
};

Gallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_language: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
            poster_path: PropTypes.string,
            release_date: PropTypes.string.isRequired,
        })
    ),
};

export default Gallery;