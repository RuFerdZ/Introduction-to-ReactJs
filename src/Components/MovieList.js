import React, {useContext} from 'react';
import '../App.css';
import Movie from './Movie';
import {MovieContext} from '../Context-Api/MovieContext';

function MovieList() {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className='MovieList'>
            {movies.map(movie=>(
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </div>
    );
}

export default MovieList;
