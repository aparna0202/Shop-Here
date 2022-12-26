import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Products from "./Products";
import Contact from "./Contact";
import CategorisedProducts from "./CategorisedProducts";

function App() {
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Header
        setDisplaySearchResults={setDisplaySearchResults}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:cat" element={<CategorisedProducts />} />
        <Route path="/search" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
