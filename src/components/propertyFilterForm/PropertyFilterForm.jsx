import { useState } from 'react';

function PropertyFilterForm({ onSearch, initialFilters }) {
  const [name, setName] = useState(initialFilters.name || '');
  const [address, setAddress] = useState(initialFilters.address || '');
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice || '');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ name, address, minPrice, maxPrice });
  };

  return (
    <form onSubmit={handleSearch} className="filters">
      <input
        type="text"
        placeholder="Property Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default PropertyFilterForm;