import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import GlobalContext from '../context/GlobalContext'

const Transact = () => {

  const { makeTransaction } = useContext(GlobalContext)

  const [customers, setCustomers] = useState([])
  const [formData, setFormData] = useState({
    from: null,
    to: null,
    amount: 0,
  })
  const onChangeData = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formSubmit = e => {
    e.preventDefault()
    if (formData.amount === 0 || formData.to === null || formData.from === null) {
      alert('Please fill the all data')
    }
    if (formData.from === formData.to) {
      alert("Invalid receiver name")
    }
    makeTransaction({
      from: formData.from,
      to: formData.to,
      amount: formData.amount,
    })
  }

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setCustomers(res.data))
      .catch(error => console.log(error));
  });
  console.log(customers);
  return (
    <>

      <div>
        <form onSubmit={formSubmit} action='#' className='transactionFrom'>
          <h1>from</h1>

          <select defaultValue='DEFAULT' name="from" id="from" onChange={onChangeData}>
            <option value='DEFAULT' disabled>
              -- select a person --
            </option>
            {customers.map((customer, key) => (
              <option value={formData.from}>{customer.name}</option>
            ))}
          </select>
          <h1>to</h1>
          <select defaultValue='DEFAULT' name="to" id="to" onChange={onChangeData}>
            <option value='DEFAULT' disabled>
              -- select a person --
            </option>
            {customers.map((customer, key) => (
              <option value={formData.to}>{customer.name}</option>
            ))}
          </select>

          <input
            type='number'
            id='amount'
            name='amount'
            value={formData.amount}
            onChange={onChangeData}
          />
          <button type='submit'>transfer</button>
        </form>
      </div>
    </>
  )
}

export default Transact
