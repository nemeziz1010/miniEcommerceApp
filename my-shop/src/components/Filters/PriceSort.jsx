import { useProducts } from '../../hooks/useProducts';

const PriceSort = () => {
  const { sortOrder, setSortOrder } = useProducts();

  return (
    <div className="filter-group">
      <label htmlFor="sort">Sort by Price</label>
      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="filter-select"
      >
        <option value="">Default</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </div>
  );
};

export default PriceSort;
