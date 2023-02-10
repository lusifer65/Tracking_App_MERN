import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import PlaceOrder from "./Components/PlaceOrder";
import Sucess from "./Components/Sucess";
import Track from "./Components/Track";
import "./style.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/placeOrder">Place order</Link>
          <Link to="/track">Track Order</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 style={{ textAlign: "center",margin:"1rem" }}>Welcome to my App</h1>
              </>
            }
          />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/track" element={<Track />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center",letterSpacing:"2px" }}> Sorry this page is not exist!!</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
