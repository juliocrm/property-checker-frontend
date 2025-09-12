import './PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <h2>{property.name}</h2>
      <p>Address: {property.address}</p>
      <p>Price: ${property.price.toLocaleString('en-US')}</p>
    </div>
  );
}

export default PropertyCard;