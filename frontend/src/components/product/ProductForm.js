import React, { useState } from "react";

function ProductForm({ onSubmit }) {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Details</h4>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              placeholder="Product Name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="form-control"
              placeholder="Description"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="form-control"
              placeholder="Price"
            />
          </div>


          <div className="form-group">
            <input
              type="text"
              value={duration}
              onChange={e => setDuration(e.target.value)}
              className="form-control"
              placeholder="Duration to hold the product"
            />
            <div className="form-group"></div>
            <button
              className="btn btn-success"
              onClick={e =>
                onSubmit({ productName, description, price, duration })
              }
            >
              Start Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
