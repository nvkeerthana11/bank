import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Adduser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [accno, setAccno] = useState("");
    const [balance, setBalance] = useState("");
    const changeOnClick = e => {
        e.preventDefault();

        const customers = {
            name,
            email,
            accno,
            balance
        };
        axios
            .post("http://localhost:5000/users/add", customers)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <Link to="/customers">
                <Button>Contacts</Button>
            </Link>
            <form encType="multipart/form-data" onSubmit={changeOnClick} className="add-form" id="add-form">
                <div className="form-group">
                    <label htmlFor="name">
                        name
                    </label>
                    <input type="text" name="name" id="name"
                        value={name} onChange={e => setName(e.target.value)} placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        email
                    </label>
                    <input type="email" name="email" id="email"
                        value={email} onChange={e => setEmail(e.target.value)} placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="number">
                        account number
                    </label>
                    <input type="number" name="accno" id="accno"
                        value={accno} onChange={e => setAccno(e.target.value)} placeholder="Your Account Number" />
                </div>
                <div className="form-group">
                    <label htmlFor="number">
                        balance
                    </label>
                    <input type="number" name="balance" id="balance"
                        value={balance} onChange={e => setBalance(e.target.value)} placeholder="Your Current Balance" />
                </div>
                <button type="submit">add</button>

            </form>
        </div>
    )
}

export default Adduser
