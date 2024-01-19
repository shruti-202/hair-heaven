import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import original from "../../assets/photos/original.png";
import arrow from "../../assets/photos/arrow.png";
import github from "../../assets/photos/github.png";
import twitter from "../../assets/photos/twitter.png";
import linkedin from "../../assets/photos/linkedin.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-bottom-about">
            <div className="footer-bottom-about-list">
              <h4 className="footer-heading">HAIR HEAVEN</h4>
              <ul className="footer-unordered-list">
                <li className="footer-heading-items">About Us</li>
                <li className="footer-heading-items">Join Our Team</li>
                <li className="footer-heading-items">Reviews</li>
                <li className="footer-heading-items">Hair Care 101</li>
                <li className="footer-heading-items">HairHeaven Card</li>
                <li className="footer-heading-items">Hair Blogs</li>
                <li className="footer-heading-items">Bulk Enquiry</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom-customer">
            <h4 className="footer-heading">CUSTOMER POLICIES</h4>
            <ul className="footer-unordered-list">
              <li className="footer-heading-items">Contact Us</li>
              <li className="footer-heading-items">FAQ</li>
              <li className="footer-heading-items">T&C</li>
              <li className="footer-heading-items">Terms of Use</li>
              <li className="footer-heading-items">Track Orders</li>
              <li className="footer-heading-items">Shipping</li>
              <li className="footer-heading-items">Cancellation</li>
              <li className="footer-heading-items">Returns</li>
              <li className="footer-heading-items">Privacy policy</li>
              <li className="footer-heading-items">Grievance Officer</li>
            </ul>
          </div>
          <div className="footer-bottom-connect">
            <h4 className="footer-heading">KEEP IN TOUCH</h4>
            <Link target="_blank" to="https://github.com/shruti-202">
              <img
                className="connect-ions"
                src={github}
                width="20px"
                height="20px"
                alt="github"
              />
            </Link>
            <Link target="_blank" to="https://twitter.com/shruugawande">
              <img
                className="connect-ions"
                src={twitter}
                width="20px"
                height="20px"
                alt="twitter"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/shruti-gawande/"
            >
              <img
                className="connect-ions"
                src={linkedin}
                width="20px"
                height="20px"
                alt="instagram"
              />
            </Link>
          </div>
          <div className="footer-bottom-return">
            <div className="footer-section">
              <div className="footer-images">
                {" "}
                <img src={original} alt="footer" width="40px" />
              </div>
              <div className="footer-promises">
                <strong>100 % ORIGINAL </strong>
                guarantee
                <br /> for all products at Hair-Heaven
              </div>
            </div>

            <div className="footer-section-two">
              <div className="footer-images">
                <img src={arrow} alt="footer" width="40px" />
              </div>
              <div className="footer-return">
                <strong>Return within 30 days</strong>
                <br /> of receiving your products
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-owner">
        Made in India with ❤️ by Shruti Gawande
        <p>© 2023 HairHeaven, All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
