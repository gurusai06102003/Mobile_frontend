import React from "react";
import { Link } from "react-router-dom";
import "./MobileCard.css";

const MobileCard = ({ mobile }) => {
  if(!mobile){
    return;
  }
  return (
    <div className="mobile-card">
      {/* <img src={mobile.image} alt={mobile.model} /> */}
      <h3>{mobile.model}</h3>
      <p>Price: {mobile.price}</p>
      <p>rating: {mobile.rating}</p>
      <p>supports 5g: {mobile.has_5g}</p>
      <p>nfc: {mobile.has_nfc}</p>
      <p>has_ir_blaster: {mobile.has_ir_blaster}</p>
      <p>processor_brand: {mobile.processor_brand}</p>
      <p>num_cores: {mobile.num_cores}</p>
      <p>processor_speed: {mobile.processor_speed}</p>
      <p>battery_capacity: {mobile.battery_capacity}</p>
      <p>charging_speed: {mobile.charging_speed}</p>
      <p>fast_charging: {mobile.fast_charging}</p>
      <p>ram: {mobile.ram}</p>
      <p>storage: {mobile.storage}</p>
      <p>screen_size: {mobile.screen_size}</p>
      <p>refresh_rate: {mobile.refresh_rate}</p>
      <p>resolution: {mobile.resolution}</p>
      <p>num_rear_cameras: {mobile.num_rear_cameras}</p>
      <p>num_front_cameras: {mobile.num_front_cameras}</p>
      <p>os: {mobile.os}</p>
      <p>primary_camera_rear: {mobile.primary_camera_rear}</p>
      <p>primary_camera_front: {mobile.primary_camera_front}</p>
      <p>extended_memory_available: {mobile.extended_memory_available}</p>
      <p>extended_upto: {mobile.extended_upto}</p>

      <Link to={`/mobiles/${mobile.brand_name}`}>View Details</Link>
    </div>
  );
};

export default MobileCard;