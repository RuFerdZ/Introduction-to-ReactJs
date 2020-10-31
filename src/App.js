import React from 'react';
import './App.css';
import Lake from './Lake';
import Hook from './Hook';
import Checkbox from './Checkbox';
import UseEffect from './UseEffect';
import GitHubUser from './GitHubUser';
import Reducer from './Reducer';

function App() {
  
  const lakelist = [
    "Echo Lake",
    "Maud Lake",
    "Cascade Lake"
  ];

  const lakeObjectList = [
    {id: "1", name: "Echo", trailHead: "Echo"},
    {id: "2", name: "Maud", trailHead: "Wrights"},
    {id: "3", name: "Velma", trailHead: "Bayview"}
  ];

  return (
    <div>
      <Lake lakes={lakeObjectList} />
      <Hook />
      <Checkbox />
      <br/>
      <UseEffect /> 
      <GitHubUser login="RuFerdZ"/>
      <br />
      <Reducer />
    </div>
  );
}

export default App;
