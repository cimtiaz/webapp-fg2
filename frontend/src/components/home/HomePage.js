import React, { Component } from "react";

class Checkbox extends React.Component {
  state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  render() {
    return (
      <div>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Seller</span>
        </label>
       <label>
        <Checkbox
        checked={this.state.checked}
        onChange={this.handleCheckboxChange}
         />
         <span>Buyer</span>
         </label>
         <label>
        <Checkbox
        checked={this.state.checked}
        onChange={this.handleCheckboxChange}
         />
         <span>About</span>
         </label>
         <label>
        <Checkbox
        checked={this.state.checked}
        onChange={this.handleCheckboxChange}
         />
         <span>Profile</span>
         </label>       
      </div>
      
    )
  }
}

export default Checkbox;