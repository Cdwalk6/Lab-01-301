import "./App.css";
import Header from "./header.js";
import Footer from "./footer.js";
import Main from "./main.js";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;