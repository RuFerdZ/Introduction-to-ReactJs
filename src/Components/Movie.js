import React from 'react';
import '../App.css';

function Movie({name, price}) {
    return (
        <div className='Movie'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default Movie;
