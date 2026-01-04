import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../ProductCard/ProductCard';
import NoProducts from '../EmptyStates/NoProducts';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="product-list-status">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-status error">
        <p>Error: {error}</p>
        <p>Please try refreshing the page.</p>
      </div>
    );
  }

  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
