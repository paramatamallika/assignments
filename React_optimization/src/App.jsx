import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

export default function App() {
  const [count, setCount] = useState(0);

  // Large product list (static for demo)
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];

  /* 🔹 useMemo to avoid recalculating total price */
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  /* 🔹 useCallback to keep function reference stable */
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}
