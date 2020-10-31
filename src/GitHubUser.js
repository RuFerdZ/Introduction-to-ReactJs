import React, {useState, useEffect} from 'react';

function GitHubUser({login}){

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, []);

    if (data){
        return(
            <>
                <h1>{data.login}</h1>
                <img src={data.avatar_url} width={100} />
            </>
        );
    }
    return null;
}

export default GitHubUser;