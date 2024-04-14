import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/ProductSection/ProductSection";
import products from "./Components/Products/Products";
import Toast from "./Components/Toast/Toast";
import Card from "./Components/Card/Card";
import ProductsContext from "./Contexts/ProductContext";

function App() {
  const [allProducts, setAllproducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCard, setIsShowCard] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        setAllproducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCard,
        setIsShowCard,
      }}
    >
      <div>
        <Navbar />
        <Card />
        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title mt-4">All Products</h1>
            <ProductSection />
          </div>
        </main>
        <Toast />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
