import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="about app">
          <h3>About</h3>
          <ul>
            <li>
              <a href="">contact us</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">careers</a>
            </li>
            <li>
              <a href="">Flipkart stories</a>
            </li>
            <li>
              <a href="">press</a>
            </li>
            <li>
              <a href="">flipkart wholesale</a>
            </li>
          </ul>
        </div>
        <div className="help app">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="">payment</a>
            </li>
            <li>
              <a href="">shipping</a>
            </li>
            <li>
              <a href="">cancellation & Returns</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Report infringement</a>
            </li>
          </ul>
        </div>
        <div className="policy app">
          <h3>Policy</h3>
          <ul>
            <li>
              <a href="">Return policy</a>
            </li>
            <li>
              <a href="">Terms of use</a>
            </li>
            <li>
              <a href="">security</a>
            </li>
            <li>
              <a href="">privacy</a>
            </li>
            <li>
              <a href="">sitemap</a>
            </li>
            <li>
              <a href="">EPR compliance</a>
            </li>
          </ul>
        </div>
        <div className="social app">
          <h3>social</h3>
          <ul>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">twitter</a>
            </li>
            <li>
              <a href="">Youtube</a>
            </li>
          </ul>
        </div>
        <div className="mail app main">
          <h3>Mail Us</h3>
          <p>
            Flipkart internet privet limited,Buildings Alyssa, Begonia & clove
            Embassy tech village,uter Ring Road, Devarabessanahalli
            village,bengaluru 560103,karnataka, india
          </p>
        </div>
        <div className=" office app main">
          <h3>Registered office Address</h3>
          <p>
            Flipkart internet privet limited,Buildings Alyssa, Begonia & clove
            Embassy tech village,uter Ring Road, Devarabessanahalli
            village,bengaluru 560103,karnataka, india
            <ul>
              <li>CIN: U51109KA2012PTCO66107</li>
              <li>
                Telephone:<a OnClick="tele">18002029898</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
  const OnClick = () => {
    alert("call flipkart");
  };
};
export default Footer;
