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
    const elementArray = [];

    for (let item in this.state.form) {
      elementArray.push({
        id: item,
        config: this.state.form[item],
      });
    }

    return (
      <div className="account">
        <h2>Account</h2>
        <form>
          {elementArray.map((item) => {
            return (
              <Input
                key={item.id}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
              />
            );
          })}
          <Button btnType="form">Submit</Button>
        </form>
      </div>
    );
  }
}

export default Account;
