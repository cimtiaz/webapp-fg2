import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

function Navbar({onLogout}) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mx-auto">
                


                        <li className="nav-item">
                            <Link to="/buyer" className="nav-link">
                                Buyer
                            </Link>
                        </li>
                     
                       
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/seller" className="nav-link">
                                Seller
                            </Link>
                        </li>
                </ul>

                <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>Logout</button>
       
            </div>
        </nav>
        
       
    );
    
}

export default Navbar ;
