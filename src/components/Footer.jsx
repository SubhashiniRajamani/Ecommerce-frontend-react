import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="gs-footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row ">

          {/* COLUMN 1 - BRAND */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mt-3 ">
            <h5 className="gs-footer-title">Godwin Shopping</h5>
            <p className="gs-footer-text pr-4">
              Your trusted online shopping platform for quality products,
              secure payments, and fast delivery.
            </p>
          </div>

          {/* COLUMN 2 - QUICK LINKS */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4  mt-3">
            <h5 className="gs-footer-title">Quick Links</h5>
            <ul className="gs-footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/mycarts">My Cart</Link></li>
              <li><Link to="/vission">Vision</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 - CUSTOMER SERVICE */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4  mt-3">
            <h5 className="gs-footer-title">Customer Service</h5>
            <ul className="gs-footer-list">
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 - CONTACT */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4  mt-3">
            <h5 className="gs-footer-title">Contact Us</h5>

            <p className="gs-footer-text">
              <i className="bi bi-envelope-fill me-2"></i>
              support@godwinshopping.com
            </p>

            <p className="gs-footer-text">
              <i className="bi bi-telephone-fill me-2"></i>
             <a style={{color: "#cfcfcf"}} href=""> +91 6379362330</a>
            </p>

            <p className="gs-footer-text">
              <i className="bi bi-geo-alt-fill me-2"></i>
            Thirunelveli, <br />
            Tamil Nadu , 628 656
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <hr className="gs-footer-hr" />
        <p className=" small mb-2 pb-2">
          © 2023–2024 <b>Godwin Shopping</b>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
