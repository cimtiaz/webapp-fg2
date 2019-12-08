import React from "react";

class Transactions extends React.Component {
  state = {
        transactionList : [{
                                 id: 1,
                                 firstname: 'Robin',
                                 lastname: 'Wieruch',
                                 amount: 1988,
                                 date: '10/12/2018',
                               },
                               {
                                 id: 2,
                                 firstname: 'Dave',
                                 lastname: 'Davidds',
                                 amount: 1990,
                                 date: '10/12/2018',
                               },
                                 {
                                  id: 23,
                                  firstname: 'Dsdaave',
                                  lastname: 'Ddsaavidds',
                                  amount: 1994,
                                  date: '10/12/2018',
                               },]};

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
           {this.state.transactionList.map(item => (
                   <tr>
                     <td>{item.id}</td>
                     <td>{item.firstname}</td>
                     <td>{item.lastname}</td>
                     <td>{item.amount}</td>
                     <td>{item.date}</td>
                   </tr>)
            )}
         </tbody>
      </table>
    );
  }
}

export default Transactions;
