import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, title, price, quantity, stock, thumbnail } = item;

  const handleDecrement = () => {
    updateQuantity(id, quantity - 1, stock);
  };

  const handleIncrement = () => {
    updateQuantity(id, quantity + 1, stock);
  };

  return (
    <div className="cart-item">
      <img src={thumbnail} alt={title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{title}</h4>
      </div>
      <div className="cart-item-quantity">
        <button 
          className="qty-btn" 
          onClick={handleDecrement}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="qty-value">{quantity}</span>
        <button 
          className="qty-btn" 
          onClick={handleIncrement}
          disabled={quantity >= stock}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        {formatPrice(price * quantity)}
      </div>
      <button 
        className="cart-item-remove" 
        onClick={() => removeFromCart(id)}
        aria-label="Remove item"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
