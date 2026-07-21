import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Globe } from "lucide-react";

function Footer() {
  return (
    <footer id="about">
      <div className="container footer-container">
        {/* Brand */}

        <div className="footer-section">
          <h2 className="footer-logo">BlogSphere</h2>

          <p>
            A modern platform to create, manage, and share blogs with an elegant
            writing experience.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a href="#blogs">Blogs</a>
            </li>

            <li>
              <Link to="/add-blog">Write</Link>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <ul>
            <li>
              <MapPin size={18} />
              <span>Chennai, India</span>
            </li>

            <li>
              <Mail size={18} />
              <span>hello@blogsphere.com</span>
            </li>

            <li>
              <Globe size={18} />
              <span>www.blogsphere.com</span>
            </li>

            <li>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2026 BlogSphere. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
