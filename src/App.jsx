import { useEffect, useState } from 'react';
import './App.css';
import { useProperties } from './hooks/useProperties';
import PropertyFilterForm from './components/PropertyFilterForm/PropertyFilterForm';
import PropertyList from './components/PropertyList/PropertyList';
import Header from './components/Header/Header';

function App() {
  const [filters, setFilters] = useState({});
  const { properties, loading, error, fetchProperties } = useProperties();

  useEffect(() => {
    fetchProperties(filters);
  }, [fetchProperties, filters]);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <PropertyFilterForm onSearch={handleSearch} initialFilters={filters} />
        <PropertyList properties={properties} loading={loading} error={error} />
      </main>
    </div>
  );
}

export default App;
