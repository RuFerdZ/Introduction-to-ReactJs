import React, {useState, useEffect} from 'react';

function UseEffect(){

    const [val, setVal] = useState("");
    const [val2, setVal2] = useState("");

    useEffect(()=>{
        console.log(`field 1: ${val}`);
    }, [val]);

    useEffect(()=>{
        console.log(`field 2: ${val2}`);
    }, [val2]);

    return(
        <>
            <label>
                Favourite Phrase:
                <input 
                    value={val} 
                    onChange={e => setVal(e.target.value)} 
                />
            </label>
            <br />
            <label>
                Second Favourite Phrase:
                <input 
                    value={val2} 
                    onChange={e => setVal2(e.target.value)} 
                />
            </label>
        </>
    );
}

export default UseEffect;