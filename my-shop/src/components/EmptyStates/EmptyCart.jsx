import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart-icon">🛒</div>
      <h3>Your Cart is Empty</h3>
      <p>Add some products to get started!</p>
    </div>
  );
};

export default EmptyCart;
