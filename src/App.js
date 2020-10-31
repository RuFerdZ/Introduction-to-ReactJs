import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users, setUsers] = useState([
    { name: "Rusiru Fernando", message: "Hello im working at Avantrio"},
    { name: "Dilanka Harshani", message: "Hello im studying at IIT"},
    { name: "Hasani Dilhari", message: "Hello im working at JRC Software"}
  ])


  // const sayHello = () => {
  //   console.log("hello");
  // };

  return(
    <div className="app">
      {/* <Tweet name="Rusiru Fernadno" message="Hello im working at Avantrio" />
      <Tweet name="Dinu Senal" message="Hello im working at Avantrio" />
      <Tweet name="Dilanka Harshani"  message="Hello im studying at IIT"/>
      <Tweet name="Hasani Dilhari" message="Hello im working at JRC Software" /> */}

      {
        users.map(user =>(
          <Tweet name={user.name} message={user.message} />
        ))
      }
    </div>
  )
}



export default App;