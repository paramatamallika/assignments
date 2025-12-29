export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");

  return (
    <div>
      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ₹{product.price}
          </span>
          <button onClick={() => onSelect(product)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}
