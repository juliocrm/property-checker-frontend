import { useState, useEffect } from 'react';
import './PropertyModal.css';
import { fetchPropertyTrace } from '../../services/propertyService';

/**
 * Displays a modal with detailed information about a property,
 * including its transaction trace fetched from an API.
 * @param {{property: object, onClose: function}} props
 * @returns {JSX.Element|null}
 */
function PropertyModal({ property, onClose }) {
  const [trace, setTrace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (property) {
      const fetchTrace = async () => {
        setLoading(true);
        setError(null);
        setTrace(null);
        try {
          const data = await fetchPropertyTrace(property.id);
          setTrace(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };

      fetchTrace();
    }
  }, [property]);

  if (!property) {
    return null;
  }

  /**
   * Prevents the modal from closing when clicking inside its content.
   * @param {React.MouseEvent} e - The mouse event.
   */
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <div className="modal-left">
            <img src={property.image} alt={`Image of ${property.name}`} className="modal-image" />
          </div>
          <div className="modal-right">
            <h2>{property.name}</h2>
            <p className="modal-address"><strong>Address:</strong> {property.address}</p>
            <p className="modal-price"><strong>Price:</strong> ${property.price.toLocaleString('en-US')}</p>
            <hr />
            {loading && <p>Loading trace...</p>}
            {error && <p className="error">Error fetching trace: {error}</p>}
            {trace && (
              <div className="trace-details">
                <h3>Last Transaction</h3>
                <p><strong>Date of Sale:</strong> {new Date(trace.dateSale).toLocaleDateString()}</p>
                <p><strong>Value:</strong> ${trace.value.toLocaleString('en-US')}</p>
                <p><strong>Tax:</strong> ${trace.tax.toLocaleString('en-US')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyModal;