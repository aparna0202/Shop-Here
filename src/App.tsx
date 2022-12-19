import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Products from "./Products";
import Categories from "./Categories";
import CategorisedProducts from "./CategorisedProducts";

function App() {
  const [menData, setMenData] = useState();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:cat" element={<CategorisedProducts />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
