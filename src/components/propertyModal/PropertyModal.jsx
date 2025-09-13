import './PropertyModal.css';

function PropertyModal({ property, onClose }) {
  if (!property) {
    return null;
  }

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={property.image} alt={`Image of ${property.name}`} className="modal-image" />
        <h2>{property.name}</h2>
        <p className="modal-address">{property.address}</p>
        <p className="modal-price">${property.price.toLocaleString('en-US')}</p>
      </div>
    </div>
  );
}

export default PropertyModal;