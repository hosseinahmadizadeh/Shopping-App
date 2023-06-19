import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shopping from "./container/Shopping/Shopping";
import Checkout from "./container/Checkout/Checkout";
import Account from "./container/Account/Account";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/" element={<Shopping />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
