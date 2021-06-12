import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios';

const Transactions = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/transactions')
            .then(res => setTransactions(res.data))
            .catch(error => console.log(error));
    });
    return (
        <>
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <div>

                <h1>Transaction History</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>SENDER</th>
                            <th>RECIEVER</th>
                            <th>AMOUNT TRANSACTED</th>
                            <th>DATE OF TRANSACTION</th>
                        </tr>

                    </thead>
                    <tbody>

                        {transactions.map((transaction, key) => (
                            <tr>

                                <td>{key + 1}</td>

                                <td>{transaction.from}</td>


                                <td>{transaction.to}</td>

                                <td>{transaction.amount}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Transactions
