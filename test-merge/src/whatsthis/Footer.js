import React from "react";
import { Link } from "react-router-dom";
import "./test/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>AAAA</h5>
            <p>
              How To Make Animated Website Footer Design Using HTML And CSS Step
              by Step Tutorial | Website Footer design in 15 minutes
            </p>
            <input type="text" />
            <button id="subscribe" type="submit">
              Subscribe
            </button>
          </div>
          <div className="col">
            <h5>About</h5>
            <ul>
              <li>
                <Link to="/">Learn about</Link>
              </li>
              <li>
                <Link to="/">Agents</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Get the inside story</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">Communities</Link>
              </li>
              <li>
                <Link to="/">Store</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/">Resources</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Safety information</Link>
              </li>
              <li>
                <Link to="/">Supporting People</Link>
              </li>
              <li>
                <Link to="/">Cancellation options</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/">Resources</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Support</h5>
            <ul>
              <li>
                <Link to="/">Resources</Link>
              </li>
              <li>
                <Link to="/">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
