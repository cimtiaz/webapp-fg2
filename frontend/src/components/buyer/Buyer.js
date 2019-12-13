import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Confirmation from './components/confirmation/Confirmation';

function BuyerForm({ onSubmit }) {
  const [transaction, setTransaction] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  return (
    <div className="card row mt-6">
      <div className="card-body">
        <h4 className="card-title">Enter Transaction ID</h4>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={transaction}
              onChange={e => setTransaction(e.target.value)}
              placeholder="Transaction ID"
            />
          </div>

          <div className="form-group">
            <Link to="/confirmation">
              <button className="btn btn-success">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyerForm;
