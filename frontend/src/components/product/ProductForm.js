import React from "react";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        productName : "",
        description : "",
        price : "",
        duration : "",
        message : ""
    }
  }

    handleSubmit () {
      // Invoke the passed in event callback
      this.props.onSubmit(
        {
           productName: this.state.productName,
           description: this.state.description,
           price: this.state.price,
           duration: this.state.duration
        });

      // Clear the input field
      this.setState({productName: ""});
      this.setState({description: ""});
      this.setState({price: ""});
      this.setState({duration: ""});

      this.setState({message: "The record is saved"});


    }


  render () {
      return (
        <div className="card mt-0">
          <div className="card-body">
            <h4 className="card-title">Details</h4>
            <div>
              <div className="result">{ this.state.message }</div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.productName}
                  onChange={e => this.setState({productName : e.target.value})}
                  placeholder="Product Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  value={this.state.description}
                  onChange={e => this.setState({description : e.target.value})}
                  className="form-control"
                  placeholder="Description"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  value={this.state.price}
                  onChange={e => this.setState({price : e.target.value})}
                  className="form-control"
                  placeholder="Price"
                />
              </div>


              <div className="form-group">
                <input
                  type="text"
                  value={this.state.duration}
                  onChange={e => this.setState({duration : e.target.value})}
                  className="form-control"
                  placeholder="Duration to hold the product"
                />
                <div className="form-group"></div>

                <button
                  className="btn btn-success"
                  onClick={e =>
                    this.handleSubmit()
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
}

export default ProductForm;
