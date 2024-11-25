import React, { Component } from "react";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        
        <Header />
        <Home />
        <Footer/>
      </>
    );
  }
}

export default App;
