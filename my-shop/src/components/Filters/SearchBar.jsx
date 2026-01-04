import { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useDebounce } from '../../hooks/useDebounce';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useProducts();
  const [inputValue, setInputValue] = useState(searchTerm);
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  useEffect(() => {
    if (searchTerm === '' && inputValue !== '') {
      setInputValue('');
    }
  }, [searchTerm]);

  return (
    <div className="filter-group">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default SearchBar;
