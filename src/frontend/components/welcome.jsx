import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <img className="landingImage" src="./images/landingImage.png" alt="man working out" />
      <h2>Welcome to FlexTogether</h2>
      <button className="startBtn">
        <Link to="/whoAreYou">Start</Link>
      </button>
    </div>
  );
};

export default Welcome;
