import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MobileList from "./pages/MobileList";
import MobileDetails from "./pages/MobileDetails";
import Compare from "./pages/Compare";
import Navbar from "./Components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<MobileList />} />
        <Route path="/mobiles/:id" element={<MobileDetails />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;