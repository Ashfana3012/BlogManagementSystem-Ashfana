import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/addBlog.css";
import { SquarePen } from "lucide-react";

function AddBlog() {
  return (
    <>
      <Navbar />

      <section className="add-blog-page">
        <div className="blog-form-container">
        <h1 className="page-title">
    <SquarePen size={34}/>
    <span>Write a New Blog</span>
</h1>

          <p>
            Share your thoughts, experiences and knowledge with the BlogSphere
            community.
          </p>

          <form>
            <div className="form-group">
              <label>Blog Title</label>
              <input type="text" placeholder="Enter blog title" />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select>
                <option>Select Category</option>

                <option>Technology</option>

                <option>Programming</option>

                <option>Education</option>

                <option>Travel</option>

                <option>Food</option>

                <option>Lifestyle</option>
              </select>
            </div>

            <div className="form-group">
              <label>Author Name</label>

              <input type="text" placeholder="Enter author name" />
            </div>

            <div className="form-group">
              <label>Featured Image URL (Optional)</label>

              <input type="url" placeholder="https://example.com/image.jpg" />
            </div>

            <div className="form-group">
              <label>Content</label>

              <textarea
                rows="8"
                placeholder="Write your blog here..."
              ></textarea>
            </div>

            <button className="publish-btn">Publish Blog</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AddBlog;
