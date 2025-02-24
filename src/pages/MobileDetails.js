import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MobileDetails.css";

const MobileDetails = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/mobiles/${id}`)
      .then((res) => res.json())
      .then((data) => setMobile(data))
      .catch((error) => console.error("Error fetching mobile details:", error));
  }, [id]);

  if (!mobile) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mobile-details">
      <img src={mobile.image} alt={mobile.model} />
      <h2>{mobile.brand} {mobile.model}</h2>
      <p>Price: {mobile.price}</p>
      <p>Processor: {mobile.processor}</p>
      <p>RAM: {mobile.ram}</p>
      <p>Storage: {mobile.storage}</p>
      <p>Battery: {mobile.battery}</p>
    </div>
  );
};

export default MobileDetails;
