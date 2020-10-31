import React, {useReducer} from 'react';

function Reducer(){

    // we can include the reducer to include the body of the second parameter(method)
    // default value 2nd param in reducer
    const [checked, toggle] = useReducer(checked => !checked, false);



    return(
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "Checked" : "Not Checked"}
        </>
    );
}

export default Reducer;