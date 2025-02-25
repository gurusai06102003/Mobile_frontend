import React from "react";
import { Link } from "react-router-dom";
import "./MobileCard.css";

const MobileCard = ({ mobile }) => {
  if (!mobile) {
    return;
  }
  // console.log(mobile);
  return (
    <div className="mobile-card">
      {/* <img src={mobile.image} alt={mobile.model} /> */}
      <h3>{mobile.model}</h3>
      <p>Price: {mobile.price}</p>
      <p>rating: {mobile.rating}</p>
      <p>supports 5g: {`${mobile.has_5g ? "Yes" : "No"}`}</p>
      {/* <p>nfc: {mobile.has_nfc}</p> */}
      <p>nfc: {`${mobile.has_nfc ? "Yes" : "No"}`}</p>

      <p>has_ir_blaster: {`${mobile.has_ir_blaster ? "Yes" : "No"}`}</p>
      <p>processor_brand: {mobile.processor_brand}</p>
      <p>num_cores: {mobile.num_cores} cores</p>
      <p>processor_speed: {mobile.processor_speed}GHz</p>
      <p>battery_capacity: {mobile.battery_capacity}MAh</p>
      {/* <p>charging_speed: {mobile.charging_speed}</p> */}
      <p>
        fast_charging: {`${mobile.fast_charging_available === 1 ? "Yes" : "No"}`}
      </p>
      <p>ram: {mobile.ram_capacity}GB</p>
      <p>storage: {mobile.internal_memory}GB</p>
      <p>screen_size: {mobile.screen_size}cm</p>
      <p>refresh_rate: {mobile.refresh_rate}Hz</p>
      <p>resolution: {mobile.resolution} Pixels</p>
      <p>num_rear_cameras: {mobile.num_rear_cameras}</p>
      <p>num_front_cameras: {mobile.num_front_cameras}</p>
      <p>os: {mobile.os}</p>
      <p>primary_camera_rear: {mobile.primary_camera_rear}MP</p>
      <p>primary_camera_front: {mobile.primary_camera_front}MP</p>
      <p>
        extended_memory_available:{" "}
        {`${mobile.extended_memory_available ? "Yes" : "No"}`}
      </p>
      <p>
        extended_upto:{" "}
        {`${mobile.extended_upto ? mobile.extended_upto : "Not Available"}`}
      </p>

      <Link to={`/mobiles/${mobile.brand_name}`}>View Details</Link>
    </div>
  );
};

export default MobileCard;
