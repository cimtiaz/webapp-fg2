import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import About from "./components/about/About";
import Buyer from "./components/buyer/Buyer";


function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
    <Navbar onLogout={() => Auth.logout()} />
    <div className="container mt-5">
    <Switch>
  
    <Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/buyer">
        <Buyer/>
      </Route>
    </Route>
    </Switch>
    </div>
</Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
