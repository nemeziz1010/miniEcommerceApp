import { memo, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/helpers';
import ProductModal from '../ProductModal/ProductModal';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [showModal, setShowModal] = useState(false);
  
  const { id, title, price, category, stock, thumbnail } = product;
  const isOutOfStock = stock === 0;
  const cartItem = cartItems.find((item) => item.id === id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;
  const isMaxStock = currentQuantity >= stock;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isOutOfStock && !isMaxStock) {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <div className="product-image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="product-info">
          <span className="product-category">{category}</span>
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{formatPrice(price)}</p>
          <span className={`stock-status ${isOutOfStock ? 'out-of-stock' : 'in-stock'}`}>
            {isOutOfStock ? 'Out of Stock' : `In Stock (${stock})`}
          </span>
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isOutOfStock || isMaxStock}
          >
            {isOutOfStock 
              ? 'Out of Stock' 
              : isMaxStock 
                ? 'Max in Cart' 
                : 'Add to Cart'}
          </button>
        </div>
      </div>
      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default memo(ProductCard);
