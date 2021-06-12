import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';


const Users = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setCustomers(res.data))
      .catch(error => console.log(error));
  });

  return (
    <>
      <div>
        <Link to="/add">
          <Button variant="primary">add user</Button>
        </Link>
        <Link to="/">
          <Button variant="primary">home</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ACCOUNT NUMBER</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>

            {customers.map((customer, key) => (
              <tr>

                <td>{key + 1}</td>
                <Link to={{
                  pathname: `/customer/${customer._id}`
                }}>
                  <td>{customer.name}</td>

                </Link>
                <td>{customer.email}</td>
                <td>{customer.accno}</td>
                <td>{customer.balance}</td>

              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/transact">
          <Button variant="primary">transact</Button>
        </Link>
      </div>

    </>

  )
}

export default Users
