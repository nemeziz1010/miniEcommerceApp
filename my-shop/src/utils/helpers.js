export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const getUniqueCategories = (products) => {
  const categories = products.map((product) => product.category);
  return ['all', ...new Set(categories)];
};

export const filterProducts = (products, { searchTerm, category, sortOrder }) => {
  let filtered = [...products];

  if (searchTerm) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category && category !== 'all') {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (sortOrder === 'low-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'high-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered;
};

export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const calculateCartItemCount = (cartItems) => {
  return cartItems.reduce((count, item) => count + item.quantity, 0);
};
