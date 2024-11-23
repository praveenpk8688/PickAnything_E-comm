import React from "react";
import "../Css/Footer.css";
import achieversIT from "../../Images/achieversIT.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section-main">
          <h2 className="footer-logo">
            <img src={achieversIT} id="logo2" alt="BuyMore" />
          </h2>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            laudantium doloribus molestiae illo pariatur minus recusandae maxime
            cumque, harum quisquam repellendus nemo vero modi ea, deserunt
            laborum dolorum! Enim, facilis.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">
                Careers
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">
                Our Store
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">
                Our Cares
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">
                Terms & Conditions
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Customer Care</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">
                Help Center
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">
                How to Buy
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">
                Track Your Order
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">
                Corporate & Bulk Purchasing
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">
                Returns & Refunds
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">
                70 Washington Square South, New York, NY 10012, United States
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">
                Email: example@gmail.com
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">
                Phone: +1 1123 456 780
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
