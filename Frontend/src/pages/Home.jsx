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
          <div className="container hero-content">
            <div className="hero-text">
              <span className="hero-badge">Modern Blogging Platform</span>

              <h1>
                Create. <span>Share.</span> Inspire.
              </h1>

              <p>
                A modern platform to create, manage, and share your blogs with
                an elegant writing experience. Start your blogging journey and
                inspire readers around the world.
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

            <div className="hero-image">
              <div className="hero-illustration">
                <div className="laptop">
                  <div className="screen">
                    <div className="screen-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="code-lines">
                      <div className="line long"></div>
                      <div className="line medium"></div>
                      <div className="line short"></div>
                      <div className="line long"></div>
                    </div>
                  </div>

                  <div className="base"></div>
                </div>

                <div className="floating-card write-card">Write</div>

                <div className="floating-card publish-card">Publish</div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}

        <section id="blogs" className="blogs-section">
          <div className="container">
            <h2 className="section-title">Latest Blogs</h2>

            <div className="blog-grid">
              <Link to="/blog/1" className="blog-card">
                <div className="blog-image tech-bg"></div>

                <div className="blog-content">
                  <span className="category">Technology</span>

                  <h3>Getting Started with ASP.NET Core</h3>

                  <p>
                    Learn how to build scalable Web APIs using ASP.NET Core and
                    C#.
                  </p>

                  <div className="blog-footer">
                    <span>Ashfana</span>

                    <span className="read-more">Read More →</span>
                  </div>
                </div>
              </Link>

              <Link to="/blog/2" className="blog-card">
                <div className="blog-image react-bg"></div>

                <div className="blog-content">
                  <span className="category">React</span>

                  <h3>Modern React Development</h3>

                  <p>
                    Build reusable components and create fast user interfaces
                    with React.
                  </p>

                  <div className="blog-footer">
                    <span>Ashfana</span>

                    <span className="read-more">Read More →</span>
                  </div>
                </div>
              </Link>

              <Link to="/blog/3" className="blog-card">
                <div className="blog-image sql-bg"></div>

                <div className="blog-content">
                  <span className="category">Database</span>

                  <h3>SQL Server Performance Tips</h3>

                  <p>
                    Improve query performance using indexes and optimization
                    techniques.
                  </p>

                  <div className="blog-footer">
                    <span>Ashfana</span>

                    <span className="read-more">Read More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
