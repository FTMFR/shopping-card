import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/Navbar/ProductSection/ProductSection";
import products from "./Components/Products/Products";
import Toast from "./Components/Toast/Toast";

function App() {
  const [allProducts, setAllproducts] = useState(products);

  return (
    <div>
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title mt-4">All Products</h1>
          {allProducts.map((product) => (
            <ProductSection {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
