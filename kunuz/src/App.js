import React from "react";
import "./App.css";
import Economics from "./components/Economics";
import Sport from "./components/Sport";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Economics" component={Economics} />
          <Route path="/Sport" component={Sport} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
