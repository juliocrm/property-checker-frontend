import { useState, useCallback } from 'react';

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProperties = useCallback(async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const activeFilters = Object.entries(filters).reduce((acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      }, {});

      const queryParams = new URLSearchParams(activeFilters).toString();
      const url = `http://localhost:5083/api/Property${queryParams ? `?${queryParams}` : ''}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();
      setProperties(data);
    } catch (e) {
      setError(e.message);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    properties,
    loading,
    error,
    fetchProperties,
  };
};