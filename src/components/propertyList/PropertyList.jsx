import './PropertyList.css';
import PropertyCard from '../propertyCard/PropertyCard';

function PropertyList({ properties, loading, error, onCardClick }) {
  if (loading) {
    return <p>Loading properties...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (properties.length === 0) {
    return <p>Not properties found.</p>;
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} onClick={onCardClick} />
      ))}
    </div>
  );
}

export default PropertyList;