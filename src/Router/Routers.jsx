import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Component/Navbar";
import SHow from "../Component/SHow";
import Explore from "../Component/Explore";

const Routers = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={<SHow />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default Routers;
