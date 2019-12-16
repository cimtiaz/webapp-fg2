import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

// Import pages
import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";
import Navbarhome from "./components/layout/Navbarhome";
import Footer from "./components/layout/Footer";
import LoginPage from "./components/auth/LoginPage";
import Home from "./components/about/Home";
import Contactus from "./components/about/Contactus";
import About from "./components/about/About";
import Buyer from "./components/buyer/Buyer";
import Confirmation from "./components/confirmation/Confirmation";
import ProductPage from "./components/product/ProductPage";
import UploadForm from "./components/product/UploadForm";
import Transaction from "./components/transactions/ListOfTransactions";
import Faq from "./components/about/Faq";
import OurTeam from "./components/about/OurTeam";

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
            <About />
          </Route>

          <Route path="/buyer">
            <Buyer />
          </Route>

          <Route path="/product">
            <ProductPage />
            <UploadForm />
          </Route>

          <Route path="/transactions">
            <Transaction />
          </Route>
        </Switch>
        <Footer onLogout={() => Auth.logout()} />
      </div>
    </Router>
  );
  const notLoggedInRouter = (
    <Router>
      <Navbarhome />
      <div className="container mt-5">
        <Switch>
          <Route path="/about">
            <Home />
            <LoginPage />
            <Faq />
            <OurTeam />
            <Contactus />
          </Route>
          <Route path="/">
            <Home />
            <LoginPage />
            <Faq />
            <OurTeam />
            <Contactus />
          </Route>
        </Switch>
        <Footer onLogout={() => Auth.logout()} />
      </div>
    </Router>
  );
  return loggedIn ? loggedInRouter : notLoggedInRouter;
}

export default App;
