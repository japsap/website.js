import React from 'react'

const Home = ({ history }) => {
    return (
        <div>
            <h1>You can login here</h1>
            <button onClick={() => {history.push('/login')}}>Login</button>
        </div>
    )
}
export default Home
