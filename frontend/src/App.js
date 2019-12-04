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