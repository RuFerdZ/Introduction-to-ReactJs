import React, {useContext, useState} from 'react';
import {MovieContext} from '../Context-Api/MovieContext';

export default function AddMovie(){

    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    function updateName(e){
        setName(e.target.value);
    }

    function updatePrice(e){
        setPrice(e.target.value);
    }

    function addMovie(e){
        e.preventDefault();
        // add to the prevous array
        setMovies(previousMovies => [...previousMovies, {name: name, price: '$' + price}]);   
    }

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" required value={name} onChange={updateName}/>
            <input type="text" name="price" required value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );
}