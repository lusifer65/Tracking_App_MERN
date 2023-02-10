import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import PlaceOrder from "./Components/PlaceOrder";
import Track from "./Components/Track";
import './style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/placeOrder">Place order</Link>
          <Link to="/track">Track Order</Link>
        </nav>
        <Routes>
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/track" element={<Track />} />
        </Routes>
       
      </BrowserRouter>
    </>
  );
};

export default App;
