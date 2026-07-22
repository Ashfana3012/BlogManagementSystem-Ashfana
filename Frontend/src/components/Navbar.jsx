import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav>
      <div className="container">

        <Logo />

        <div className="nav-links">

          <Link to="/" className="active">
            Home
          </Link>

          <a href="#blogs">Blogs</a>

          <a href="#footer">About</a>

          <Link to="/add-blog" className="write-btn">
            Add Blog
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;