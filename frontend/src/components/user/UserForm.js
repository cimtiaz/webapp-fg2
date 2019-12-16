import React from "react";
import UserApi from "./../../api/UserApi";

class UserForm extends React.Component {
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
            <h4 className="card-title">Your Profile</h4>
            <div>
              <div className="result">{ this.state.message }</div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.user.name}
                  placeholder="User Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  value={this.state.user.email}
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  value={this.state.user.phone}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>


              <div className="form-group">
                <input
                  type="text"
                  value={this.state.user.address}
                  className="form-control"
                  placeholder="Address"
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

export default UserForm;
