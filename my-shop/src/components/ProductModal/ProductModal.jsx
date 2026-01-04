import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const { addToCart, cartItems } = useCart();

  if (!product) return null;

  const { id, title, description, price, category, stock, thumbnail, brand, rating } = product;
  const isOutOfStock = stock === 0;

  const cartItem = cartItems.find((item) => item.id === id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;
  const isMaxStock = currentQuantity >= stock;

  const handleAddToCart = () => {
    if (!isOutOfStock && !isMaxStock) {
      addToCart(product);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={thumbnail} alt={title} />
          </div>
          
          <div className="modal-details">
            <span className="modal-category">{category}</span>
            <h2 className="modal-title">{title}</h2>
            {brand && <p className="modal-brand">Brand: {brand}</p>}
            {rating && (
              <p className="modal-rating">
                ⭐ {rating.toFixed(1)} / 5
              </p>
            )}
            <p className="modal-price">{formatPrice(price)}</p>
            <p className="modal-description">{description}</p>
            
            <div className="modal-stock">
              <span className={isOutOfStock ? 'out-of-stock' : 'in-stock'}>
                {isOutOfStock ? 'Out of Stock' : `In Stock: ${stock} available`}
              </span>
              {currentQuantity > 0 && (
                <span className="in-cart">({currentQuantity} in cart)</span>
              )}
            </div>

            <button
              className="modal-add-btn"
              onClick={handleAddToCart}
              disabled={isOutOfStock || isMaxStock}
            >
              {isOutOfStock 
                ? 'Out of Stock' 
                : isMaxStock 
                  ? 'Maximum Quantity in Cart' 
                  : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
