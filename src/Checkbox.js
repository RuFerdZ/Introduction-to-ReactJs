import React, {useState, useEffect} from 'react';

function Checkbox(){

    const [checked, setChecked] = useState(false);

    // useEffect(()=>{
    //         alert(`checked: ${checked.toString()}`);
    //     }
    // );


    // we can call this on "onChange" as well
    function toggle(){
        setChecked(checked => !checked)
    }


    return(
        <>
            <input type="checkbox" value={checked} onChange={()=> setChecked(!checked)} />
            {checked ? "Checked" : "Not Checked"}
        </>
    );
}

export default Checkbox;