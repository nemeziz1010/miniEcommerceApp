import './NoProducts.css';

const NoProducts = () => {
  return (
    <div className="no-products">
      <div className="no-products-icon">🔍</div>
      <h3>No Products Found</h3>
      <p>Try adjusting your search or filter criteria.</p>
    </div>
  );
};

export default NoProducts;
