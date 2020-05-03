import React from "react";
import "./styles/app.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
