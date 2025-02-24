import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import MobileCard from "../Components/MobileCard";
import "./MobileList.css";

const MobileList = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://mobile-backend-vz63.onrender.com/api/mobiles/get")
      .then((response) => {
        // console.log("API Response:", response.data); // Debugging Log
        // const mobiles = response.data;
        // console.log(mobiles[0]._id);
        setMobiles(response.data); // Ensure API returns an array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching mobiles:", err);
        setError("Failed to load mobiles. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="mobile-list">
      <h2>All Mobiles</h2>
      <div className="mobile-grid">
        {mobiles.length > 0 ? (
          mobiles.map((mobile) => {
            console.log(mobile.has_nfc);
            return <MobileCard key={mobile._id} mobile={mobile} />
          }
          )
        ) : (
          <p>No mobiles available.</p>
        )}
      </div>
    </div>
  );
};

export default MobileList;
