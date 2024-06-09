import React from 'react';
import { GithubAuth } from '../../assets/GithubAuth';


const GithubSign = () => {

    return (
        <div>
            <button onClick={GithubAuth}>Sign in with Github</button>
        </div>
    );
};

export default GithubSign;