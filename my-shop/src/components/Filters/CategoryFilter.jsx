import { useProducts } from '../../hooks/useProducts';

const CategoryFilter = () => {
  const { categories, category, setCategory } = useProducts();

  return (
    <div className="filter-group">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-select"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
