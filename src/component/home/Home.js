import React from 'react';

import Navbar from '../UsefullComps/Navbar';

const Home = ({ history }) => {
    return (
        <div>
            <Navbar/>
            <h1>You can login here</h1>
            <button onClick={() => {history.push('/login')}}>Login</button>
        </div>
    )
}
export default Home
