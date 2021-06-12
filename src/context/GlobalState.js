
import React, { useReducer } from 'react'
import globalContext from './GlobalContext'
import AppReducer from './AppReducer'
import axios from 'axios'

const GlobalState = props => {
  const initialState = {
    customers: null,
    transactions: null,
    loading: false,
  }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getCustomers = async () => {
    loading(true)
    const customers = await axios.get('http://localhost:5000/users')
    dispatch({
      type: 'SET_CUSTOMERS',
      payload: customers.data,
    })
  }
  const getTransactions = async () => {
    loading(true)
    const transactions = await axios.get('http://localhost:5000/transactions')
    dispatch({
      type: 'SET_TRANSACTIONS',
      payload: transactions.data,
    })
  }

  const makeTransaction = async data => {
    loading(true)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      await axios.post('http://localhost:5000/transactions', data, config)
    } catch (error) {
      console.log(error)
    } finally {
      getCustomers()
      loading(false)
    }
  }

  const loading = data => {
    dispatch({
      type: 'LOADING',
      payload: data,
    })
  }

  return (
    <globalContext.Provider
      value={{
        customers: state.customers,
        transactions: state.transactions,
        loading: state.loading,
        getCustomers,
        getTransactions,
        makeTransaction,
      }}
    >
      {props.children}
    </globalContext.Provider>
  )
}

export default GlobalState
