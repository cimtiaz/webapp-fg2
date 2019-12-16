import React, {Component} from "react";
import ProductApi from "./../../api/ProductApi";
import UserApi from "./../../api/UserApi";

class Transactions extends React.Component {
  state = {
        products : [],
        user : ""
        };

  componentDidMount() {
      UserApi.getCurrrentUser()
        .then(({data}) => this.setState({user: data}))
        .catch(err => console.error(err));

      ProductApi.getAllProducts()
        .then(({data}) => this.setState({products: data}))
        .catch(err => console.error(err));
  }

  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Duration</th>
            <th scope="col">User Name</th>
          </tr>
        </thead>
        <tbody>
           {this.state.products.filter(p => (p.user.userId === this.state.user.userId))
                .map(p => (
                   <tr>
                     <td>{p.id}</td>
                     <td>{p.productName}</td>
                     <td>{p.description}</td>
                     <td>{p.price}</td>
                     <td>{p.duration}</td>
                     <td>{p.user.name}</td>
                   </tr>)
            )}
         </tbody>
      </table>
    );
  }
}
export default Transactions;