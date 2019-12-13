import React from "react";
class Transactions extends React.Component {
  state = {
        transactionList : [{
                                 ID: 1,
                                 Name: 'Robin',

                                 Description: 'Samsung mobile',
                                 Status: 'In stock',
                               },
                               {
                                ID: 2,
                                 Name: 'Dave',

                                 Description: 'Laptop',
                                 Status: 'Delivered',
                               },
                                 {
                                  ID: 3,
                                  Name: 'Dsdaave',

                                  Description:'A pair of high heel shoes' ,
                                  Status: 'Delivered',
                               },]};
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>

            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
           {this.state.transactionList.map(item => (
                   <tr>
                     <td>{item.ID}</td>
                     <td>{item.Name}</td>

                     <td>{item.Description}</td>
                     <td>{item.Status}</td>
                   </tr>)
            )}
         </tbody>
      </table>
    );
  }
}
export default Transactions;