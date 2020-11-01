import React, {useState, createContext} from 'react';
import MovieList from '../Components/MovieList';

export const MovieContext = createContext();

export function MovieProvider(props){

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1234
        },
        {
            name: 'Game of Thrones',
            price: '$20',
            id: 1235
        },
        {
            name: 'Inception',
            price: '$30',
            id: 1236
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {/* <Nav />
            <MovieList /> */} 
            {/* // instead of this */}
            {props.children}
        </MovieContext.Provider>
    );
}