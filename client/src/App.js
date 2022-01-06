import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { css } from "@emotion/react";
import  PuffLoader from "react-spinners/PuffLoader";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Tell from "./components/Tell/Tell";
import Cars from "./components/Cars/Cars";
import Booking from "./components/Booking/Booking";
import Upload from "./components/Upload/Upload";

function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("white");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
  align-items: center;
`;
  return (
    <div className="App">
      {loading ? (
        <PuffLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/contact" element={<Tell />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
