import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar.jsx";
import Products from "../src/pages/products/Products.jsx"
import Homepage from "../src/pages/homepage/Homepage.jsx"

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/products" element={<Products/>}></Route>
          <Route exact path="*" element={<div>Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
