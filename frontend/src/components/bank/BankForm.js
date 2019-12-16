import React from "react";
import UserApi from "./../../api/UserApi";

class BankForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      message: ""
    };
  }

    componentDidMount() {
        UserApi.getCurrrentUser()
          .then(({data}) => this.setState({user: data}))
          .catch(err => console.error(err));
    }

  render () {
      return (
        <div className="card mt-0">
          <div className="card-body">
            <h4 className="card-title">Your Bank Details</h4>
            <div>
              <div className="result">{ this.state.message }</div>
              <div className="form-group">
                Bank Name
                <input
                  type="text"
                  className="form-control"
                  value="Swedbank AB"
                  placeholder="Bank Name"
                />
              </div>

              <div className="form-group">
                Account Number
                <input
                  type="text"
                  value="176128-8159"
                  className="form-control"
                  placeholder="Account Number"
                />
              </div>

              <div className="form-group">
                Account Title
                <input
                  type="text"
                  value={this.state.user.name}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>


              <div className="form-group">
                IBAN Number
                <input
                  type="text"
                  value="SE17-00000017698707176128-8159"
                  className="form-control"
                  placeholder="IBAN Number"
                />
                <div className="form-group"></div>

                <button
                  className="btn btn-success"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default BankForm;
