import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>TSF Bank application</h1>
            <Link to="/customers">
                <button>contacts</button>
            </Link>
            <Link to="/add">
                <button>add user</button>
            </Link>
            <Link to="/transact">
                <button>transfer money</button>
            </Link>
            <Link to="/transactions">
                <button>transaction history</button>
            </Link>
        </div>
    )
}

export default Home
