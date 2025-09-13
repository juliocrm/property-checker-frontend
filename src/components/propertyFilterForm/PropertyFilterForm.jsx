import './PropertyFilterForm.css';
import { useState, useEffect } from 'react';
import { useIsDesktop } from '../../hooks/useIsDesktop';

function PropertyFilterForm({ onSearch, initialFilters }) {
  const [name, setName] = useState(initialFilters.name || '');
  const [address, setAddress] = useState(initialFilters.address || '');
  const [minPrice, setMinPrice] = useState(initialFilters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice || '');

  const isDesktop = useIsDesktop();
  const [isMobileFocused, setIsMobileFocused] = useState(false);
  const isExpanded = isDesktop || isMobileFocused;

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ name, address, minPrice, maxPrice });
    setIsMobileFocused(false);
  };

  const handleFocus = () => {
    if (!isDesktop) setIsMobileFocused(true);
  };

  const handleBlur = () => {
    if (!isDesktop) setIsMobileFocused(false);
  };

  return (
    <form onSubmit={handleSearch} onFocus={handleFocus} onBlur={handleBlur} className={`filters ${isExpanded && !isDesktop ? 'filters-focused' : ''}`}>
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
        hidden={isExpanded ? false : true}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        hidden={isExpanded ? false : true}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        hidden={isExpanded ? false : true}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button type="submit"
        hidden={isExpanded ? false : true}
      >Search</button>
    </form>
  );
}

export default PropertyFilterForm;