import { useState, useEffect } from "react";
import axios from "axios";
import "./Compare.css";

const Compare = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [compareList, setCompareList] = useState([]);

  // Fetch all available brands
  useEffect(() => {
    axios
      .get("https://mobile-backend-vz63.onrender.com/api/mobiles/getModelNames")
      .then((response) => setBrands(response.data || []))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  // Fetch models based on the selected brand
  useEffect(() => {
    if (selectedBrand) {
      axios
        .get(`https://mobile-backend-vz63.onrender.com/api/mobiles/getModelNames/${selectedBrand}`)
        .then((response) => setModels(response.data || []))
        .catch((error) => console.error("Error fetching models:", error));
    }
  }, [selectedBrand]);

  // Add selected mobile to compare list
  const handleAddToCompare = () => {
    if (!selectedModel) return;

    axios
      .get(`https://mobile-backend-vz63.onrender.com/api/mobiles/getMobileDetails/${selectedModel}`)
      .then((response) => {
        const mobileToAdd = response.data[0];

        if (mobileToAdd) {
          setCompareList((prevList) => {
            // Ensure the mobile is not already in the list
            if (prevList.some((m) => m._id === mobileToAdd._id)) {
              return prevList;
            }
            return [...prevList, mobileToAdd]; // Flatten array, prevent nesting
          });
        }
      })
      .catch((error) => console.error("Error fetching mobile details:", error));
  };

  // Remove a mobile from the compare list
  const handleRemoveMobile = (id) => {
    setCompareList((prevList) => prevList.filter((mobile) => mobile._id !== id));
  };

  return (
    <div className="compare-container">
      <h2>Compare Mobiles</h2>

      {/* Dropdowns for selecting brand and model */}
      <div className="compare-selectors">
        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="">Select Brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {selectedBrand && (
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        )}

        <button onClick={handleAddToCompare} disabled={!selectedModel}>
          Add to Compare
        </button>
      </div>

      {/* Comparison Table */}
      {compareList.length > 0 && (
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                {compareList.map((mobile) => (
                  <th key={mobile._id}>
                    <div className="mobile-header">
                      {mobile.image && <img src={mobile.image} alt={mobile.model} />}
                      <p>{mobile.model}</p>
                      <button onClick={() => handleRemoveMobile(mobile._id)}>Remove</button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price</td>
                {compareList.map((mobile) => (
                  <td key={`price-${mobile._id}`}>₹{mobile.price}</td>
                ))}
              </tr>
              <tr>
                <td>Display</td>
                {compareList.map((mobile) => (
                  <td key={`display-${mobile._id}`}>
                    {mobile.resolution}, {mobile.screen_size}"
                  </td>
                ))}
              </tr>
              <tr>
                <td>Processor</td>
                {compareList.map((mobile) => (
                  <td key={`processor-${mobile._id}`}>
                    {mobile.processor_brand} {mobile.processor_speed} GHz
                  </td>
                ))}
              </tr>
              <tr>
                <td>RAM</td>
                {compareList.map((mobile) => (
                  <td key={`ram-${mobile._id}`}>{mobile.ram_capacity} GB</td>
                ))}
              </tr>
              <tr>
                <td>Camera</td>
                {compareList.map((mobile) => (
                  <td key={`camera-${mobile._id}`}>
                    {mobile.primary_camera_rear} MP (Rear), {mobile.primary_camera_front} MP (Front)
                  </td>
                ))}
              </tr>
              <tr>
                <td>Battery</td>
                {compareList.map((mobile) => (
                  <td key={`battery-${mobile._id}`}>{mobile.battery_capacity} mAh</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Compare;
