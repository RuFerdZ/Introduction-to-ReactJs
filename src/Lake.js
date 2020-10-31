import React from 'react';
import './App.css';

function Lake({lakes}) { 
    return(
       <ul>
        {lakes.map(lake => (<li>{lake}</li>))}
       </ul>
    );
  }

  function LakeObject({lakes}) { 
    return(
       <ul>
        {lakes.map(lake => (
            <div key={lake.id}>
                <h2>{lake.name}</h2>
                <p>Accessed by: {lake.trailHead}</p>
            </div>
        ))}
       </ul>
    );
  }

//   export default Lake;
  export default LakeObject;
 
 