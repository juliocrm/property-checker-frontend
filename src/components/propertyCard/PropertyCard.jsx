import './PropertyCard.css';

function PropertyCard({ property, onClick }) {
  if (!property) {
    return null;
  }

  return (
    <div className="property-card" onClick={() => onClick(property)}>
      <img src={property.image} alt={`Image of ${property.name}`} className="property-card-image" />
      <div className="property-card-content">
        <h2>{property.name}</h2>
        <p>Address: {property.address}</p>
        <p>Price: ${property.price.toLocaleString('en-US')}</p>
      </div>
    </div>
  );
}

export default PropertyCard;