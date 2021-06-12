import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const User = (props) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        accno: "",
        balance: ""

    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(res.data);
    };


    return (
        <>
            <Link to="/customers">
                <Button>Contacts</Button>
            </Link>
            <div>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
                <h1>{user.balance}</h1>
                <h1>{user.accno}</h1>
            </div>
        </>
    )
}

export default User
