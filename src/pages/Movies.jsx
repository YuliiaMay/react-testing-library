import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchForm from "components/SearchForm/SearchForm";
import DefaultMoviesPageImg from "components/DefaultImg/DefaultMoviesPageImg";
import Gallery from "components/Gallery/Gallery";
import { fetchMoviesByQuery } from "services/movies-api";
import { toast } from 'react-toastify';
import { Wrapper } from "./Movies.styled";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const title = (searchParams.get("title") ?? "").trim();

    useEffect(() => {
        if (title === '') return;
        setMovies([]);

        async function getMovies(title) {
            try {
                const data = await fetchMoviesByQuery(title);
                const foundMovies = data.results;
                
                if (foundMovies.length === 0) {
                    onNoAnswer();
                    return;
                }

                const sortedMovies = foundMovies.sort((firstMovie, secondMovie) =>
                    secondMovie.vote_average - firstMovie.vote_average
                );

                setMovies(sortedMovies);
            } catch (error) {
                console.log(error);
                toast.error('No results found', { duration: 3000 });
            }
        }

        getMovies(title);


    }, [title])


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const searchQuery = form.elements.title.value;

        if (searchQuery === "") {
            onEmptyQuery();
            return;
        }

        setSearchParams({ title: searchQuery });

        form.reset();
    }

    const onEmptyQuery = () => {
        toast('Please enter a search query', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const onNoAnswer = () => {
        toast("Unfortunately we found nothing. Let's try something else!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    return (
        <Wrapper>
            <SearchForm
                onSubmit={handleSubmit}
                title={title}
            />

            {
                (movies.length === 0)
                    ? <DefaultMoviesPageImg />
                    : <Gallery movies={movies}/>
            }
        </Wrapper>
    )
}

export default Movies;