import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import CartItem from './CartItem';
import EmptyCart from '../EmptyStates/EmptyCart';
import './Cart.css';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="cart-toggle" onClick={toggleCart}>
        🛒
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={toggleCart} />

      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={toggleCart}>✕</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="cart-summary-row cart-total">
                <span>Total Price:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
