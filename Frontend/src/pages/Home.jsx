import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBlogs } from "../api/blog";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  };
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
              {blogs.length === 0 ? (
                <h3>No Blogs Found</h3>
              ) : (
                blogs.map((blog) => (
                  <div key={blog.id} className="blog-card">
                    <div className="blog-image tech-bg"></div>

                    <div className="blog-content">
                      <span className="category">
                        {blog.category || "General"}
                      </span>

                      <h3>{blog.title}</h3>

                      <p>{blog.content || "No description available."}</p>

                      <div className="blog-footer">
                        <span>{blog.author}</span>

                        <div className="blog-actions">
                          <Link
                            to={`/edit-blog/${blog.id}`}
                            className="edit-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                             Edit
                          </Link>

                          <Link to={`/blog/${blog.id}`} className="read-more">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
