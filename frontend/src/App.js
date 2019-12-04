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
import Confirmation from './components/confirmation/Confirmation';
import SellerPage from "./components/seller/SellerPage";
import UploadForm from "./components/seller/UploadForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  const loggedInRouter = (
    <Router>
        <Navbar onLogout={() => Auth.logout()} />
        <div className="container mt-5">
          <Switch>

            <Route path="/confirmation" component={Confirmation} />

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/buyer">
              <Buyer/>
            </Route>

            <Route path="/seller">
              <SellerPage/>
              <UploadForm/>
            </Route>    

          </Switch>
        </div>
    </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}
          
export default App;