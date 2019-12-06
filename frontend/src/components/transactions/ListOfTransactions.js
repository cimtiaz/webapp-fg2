import React from "react";

class Transactions extends React.Component {
  state = {};
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>First name</td>
            <td>Last name</td>
            <td>Amount</td>
            <td>YY/MM/DD</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>YY/MM/DD</td>
          </tr>
          <tr>
            <th scope="row">#3</th>
            <td>Larry</td>
            <td>Hope</td>
            <td>Amount</td>
            <td>YY/MM/DD</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Transactions;
