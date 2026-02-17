import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

return (
    <div>
        <h2>Products</h2>
        <ol>
            {products.map((product) => (
                <li key={product.id}>
                    <h4>{product.title}</h4>
                    <p>₹ {product.price}</p>
                </li>
            ))}
        </ol>
    </div>
);
}

export default Products;
