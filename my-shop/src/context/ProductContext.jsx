import { createContext, useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../services/api';
import { filterProducts, getUniqueCategories } from '../utils/helpers';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const categories = useMemo(() => getUniqueCategories(products), [products]);

  const filteredProducts = useMemo(
    () => filterProducts(products, { searchTerm, category, sortOrder }),
    [products, searchTerm, category, sortOrder]
  );

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('all');
    setSortOrder('');
  };

  const value = {
    products: filteredProducts,
    allProducts: products,
    loading,
    error,
    categories,
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    sortOrder,
    setSortOrder,
    clearFilters,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
