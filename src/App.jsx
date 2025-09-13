import { useEffect, useState } from 'react';
import './App.css';
import { useProperties } from './hooks/useProperties';
import PropertyFilterForm from './components/propertyFilterForm/PropertyFilterForm';
import PropertyList from './components/PropertyList/PropertyList';
import Header from './components/header/Header';
import PropertyModal from './components/propertyModal/PropertyModal';

function App() {
  const [filters, setFilters] = useState({});
  const { properties, loading, error, fetchProperties } = useProperties();
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetchProperties(filters);
  }, [fetchProperties, filters]);

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCardClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <PropertyFilterForm onSearch={handleSearch} initialFilters={filters} />
        <PropertyList properties={properties} loading={loading} error={error} onCardClick={handleCardClick} />
      </main>
      <PropertyModal property={selectedProperty} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
