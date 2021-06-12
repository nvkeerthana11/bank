import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios'
import { Route, Switch } from "react-router-dom";
import Users from './components/Users';
import User from './components/User';
import Transact from './components/Transact';
import Transactions from './components/Transactions';
import Add from './components/Adduser';
import Home from './components/Home';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });




  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/customers" component={Users}>
            <Users />
          </Route>
          <Route exact path="/add" component={Add}>
            <Add />
          </Route>
          <Route exact path="/customer/:id" render={(props) => <User {...props} posts={posts} />}>
            <User />
          </Route>
          <Route exact path="/transact" component={Transact}>
            <Transact />
          </Route>
          <Route exact path="/transactions" component={Transactions}>
            <Transactions />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
