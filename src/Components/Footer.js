import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { GrTwitter, GrLinkedin } from "react-icons/gr";
import { IoCopyOutline } from "react-icons/io";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="socialMedia">
          <BsFacebook />
          <FaInstagramSquare />
          <GrTwitter />
          <GrLinkedin />
        </div>
        <div>
          {/* <IoCopyOutline /> */}
          @ copy:2022 Blinkspizza.com
        </div>
      </footer>
    </div>
  );
}

export default Footer;
