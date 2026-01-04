import { useProducts } from '../../hooks/useProducts';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PriceSort from './PriceSort';
import './Filters.css';

const Filters = () => {
  const { clearFilters, searchTerm, category, sortOrder } = useProducts();

  const hasActiveFilters = searchTerm || category !== 'all' || sortOrder;

  return (
    <div className="filters">
      <SearchBar />
      <CategoryFilter />
      <PriceSort />
      <div className="filter-group filter-actions">
        <button
          className="clear-filters-btn"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
