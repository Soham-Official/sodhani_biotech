import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="row">
          <div className="col-md-2 footercol">
            <div className="newsletter">
              <button className="newsletterbutton">
                Subscribe to our newsletters
              </button>
            </div>
          </div>
          <div className="col-md-8 footercol">
            <div className="quikcons m-0">
              <p className="m-0">Contact</p>
              <p className="m-0">About Us</p>
              <p className="m-0">Products</p>
              <p className="m-0">T & C's</p>
              <p className="m-0">Carees</p>
              <p className="m-0">Payment Methods</p>
            </div>
          </div>
          <div className="col-md-2 footercol">
            <i className="bi bi-facebook me-3"></i>
            <i class="bi bi-instagram me-3"></i>
            <i class="bi bi-linkedin me-3"></i>
            <i class="bi bi-twitter me-3"></i>
            <i class="bi bi-pinterest me-3"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
