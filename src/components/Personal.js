import React, { Component } from "react";

class Personal extends Component {
  constructor() {
    super();
    this.state = {
      name: "firstName lastName",
      phone: "yourPhoneNumber",
      Email: "yourEmail@email.com",
    };
    this.inputField = this.inputField.bind(this);
  }

  inputField() {}

  render() {
    const { name, phone, email } = this.state;

    return (
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }
}

export default Personal;
