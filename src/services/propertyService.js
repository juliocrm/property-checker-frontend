const API_BASE_URL = 'https://propchecker-cwbqfbemefd6f5de.canadacentral-01.azurewebsites.net/api';

/**
 * Fetches the transaction traces for a specific property.
 * @param {string} propertyId - The ID of the property.
 * @returns {Promise<object|null>} The first trace object or null if not found.
 * @throws {Error} If the network response is not ok.
 */
export const fetchPropertyTrace = async (propertyId) => {
  const response = await fetch(`${API_BASE_URL}/properties/${propertyId}/traces`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return (data && data.length > 0) ? data[0] : null;
};