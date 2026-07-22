import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

function Footer() {
  return (
    <footer id="about">

      <div className="container footer-container">

        {/* Brand */}

        <div className="footer-section">

          <h2 className="footer-logo">BlogSphere</h2>

          <p>
            BlogSphere is a modern blogging platform where creators can write,
            publish and share ideas with readers around the world.
          </p>

          <div className="social-links">

            <a href="#">
              <Github size={20} />
            </a>

            <a href="#">
              <Linkedin size={20} />
            </a>

            <a href="#">
              <Twitter size={20} />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <a href="#blogs">Latest Blogs</a>
            </li>

            <li>
              <Link to="/add-blog">Write a Blog</Link>
            </li>

            <li>
              <a href="#about">About Us</a>
            </li>

          </ul>

        </div>

        {/* Contact */}

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

      <div className="container copyright">

        <p>© 2026 BlogSphere. All Rights Reserved.</p>

      </div>

    </footer>
  );
}

export default Footer;