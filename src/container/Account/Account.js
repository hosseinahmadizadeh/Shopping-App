import React from "react";
import "./Account.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { placeholder } from "@babel/types";

class Account extends React.Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name...",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Email...",
        },
        value: "",
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password...",
        },
        value: "",
      },
    },
  };
  render() {
    return (
      <div className="account">
        <h2>Account</h2>
        <form>
          <Input type="text" placeholder="Name..." />
          <Input type="text" placeholder="Email..." />
          <Input type="password" placeholder="Password..." />
          <Button btnType="form">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Account;
