import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/pizza3.jpg";
import "../Styles/Home.css";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div
        className="headerContainer"
      >
        <h1>Blinks's Pizzeria</h1>
        <p>Pizza to fit any taste</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
