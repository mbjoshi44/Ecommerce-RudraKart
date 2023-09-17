
// Footer.js
import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>At RudraKart, we believe in offering you the freedom to shop on your terms.
             Whether you're looking for the latest fashion trends, upgrading your tech gadgets,
              or sprucing up your home, we've got you covered. With our convenient delivery options, 
              flexible payment methods, and hassle-free returns, shopping with us is a breeze.</p>
          </div>
          <div className="col-md-4">
            <h4>Get Touch With Us</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: rudrakart@ecommerce.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
