import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/Navbar/ProductSection/ProductSection";

function App() {
  return (
    <div>
      <Navbar />

      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title mt-4">All Products</h1>
          <ProductSection title="Phones" />
          <ProductSection title="Laptop" />
          <ProductSection title="Monitors" />
          <ProductSection title="Coolpads" />
        </div>
      </main>
    </div>
  );
}

export default App;
