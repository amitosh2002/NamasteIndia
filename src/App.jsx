// import "./App.css";
import { useState, useEffect } from "react";
import SHow from "./Component/SHow";
import Navbar from "./Component/Navbar";
import Explore from "./Component/Explore";
import Routers from "./Router/Routers";
import Loading from "./Component/Loading";
import SingleProduct from "./Component/SingleProduct";
import { ProductProvider } from "./Context/Product_context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Component/Card";
import { FilterProvider } from "./Context/Filter_context";
import WildCenturies from "./Component/WildCenturies";
import Exotic from "./Component/Exotic";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <ProductProvider>
        <FilterProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<SHow />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/centuries" element={<WildCenturies />}></Route>
              <Route path="/exotic" element={<Exotic />}></Route>
              <Route path="/detail/:id" element={<SingleProduct />}></Route>
              <Route></Route>
            </Routes>
          </Router>
        </FilterProvider>
      </ProductProvider>
    </>
  );
}

export default App;
