import React, {useState} from 'react';

function Hook(){

    // uses array destructuring
    // [ state, state value] , useState is a hook
    const [status, setStatus] = useState("Open");
    const [manager, setManager] = useState("Alex");
    const [year, setYear] = useState(2050);

    return(
        <>
            <div>
                <h1>{year}</h1>
                <button onClick={()=>setYear(year + 1)}>New Yeear!</button>
            </div>
            <div>
                <h1>Manager on duty: {manager}</h1>
                <button onClick={()=>setManager("Rachel")}>New Manager</button>
            </div>
            <div>
                <h1>Status: {status}</h1>
                <button onClick={()=>setStatus("Open")}>Open</button>
                <button onClick={()=>setStatus("Back in 5")}>Break</button>
                <button onClick={()=>setStatus("Closed")}>Close</button>
            </div>
        </>
    );
}

export default Hook;
