import React, {useState, useContext} from 'react';
import '../App.css';
import {MovieContext} from '../Context-Api/MovieContext'

function Nav() {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div className='Nav'>
            <h3>RuFerdZ</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;
