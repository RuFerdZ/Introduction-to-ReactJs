import React from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Nav from './Components/Nav';
import {MovieProvider} from './Context-Api/MovieContext';
import AddMovie from "./Components/AddMovie";

function App() {
  // to use movie context we have to wrap the components needing it with the provider
  return (
    // as long as the compnents are wrapped around MovieProvide it can access its content
    <MovieProvider>  
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
