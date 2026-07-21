import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero Section */}

        <section className="hero">

          <div className="container">

            <h1>Share Your Ideas With The World</h1>

            <p>
              A modern platform to create, manage, and share your blogs with an elegant writing experience.
            </p>

            <div className="hero-buttons">

              <Link to="/add-blog" className="primary-btn">
                Start Writing
              </Link>

              <a href="#blogs" className="secondary-btn">
                Explore Blogs
              </a>

            </div>

          </div>

        </section>

        {/* Blog Section */}

        <section id="blogs" className="blogs-section">

          <div className="container">

            <h2>Latest Blogs</h2>

            <div className="empty-card">

              <h3>No Blogs Yet</h3>

              <p>
                Start by writing your first blog and inspire others.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;