import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/addBlog.css";
import { SquarePen } from "lucide-react";
import { addBlog } from "../api/blog";

function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Blog title is required.";
    } else if (formData.title.trim().length < 5) {
      newErrors.title = "Blog title must contain at least 5 characters.";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author name is required.";
    } else if (formData.author.trim().length < 3) {
      newErrors.author = "Author name must contain at least 3 characters.";
    }

    if (formData.image.trim() && !/^https?:\/\/.+\..+/.test(formData.image)) {
      newErrors.image = "Please enter a valid image URL.";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required.";
    } else if (formData.content.trim().length < 30) {
      newErrors.content = "Content should contain at least 30 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
  await addBlog(formData);

  alert("Blog Published Successfully!");

  setFormData({
    title: "",
    category: "",
    author: "",
    image: "",
    content: "",
  });

  setErrors({});
} catch (error) {
  alert("Failed to publish blog.");
  console.error(error);
} finally {
  setIsSubmitting(false);
}
  };
  return (
    <>
      <Navbar />

      <section className="add-blog-page">
        <div className="blog-form-container">
          <h1 className="page-title">
            <SquarePen size={34} />
            <span>Write a New Blog</span>
          </h1>

          <p>
            Share your thoughts, experiences and knowledge with the BlogSphere
            community.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Blog Title</label>

              <input
                className={errors.title ? "error" : ""}
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
              />

              {errors.title && <p className="error-text">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                className={errors.category ? "error" : ""}
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="Programming">Programming</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>

              {errors.category && (
                <p className="error-text">{errors.category}</p>
              )}
            </div>

            <div className="form-group">
              <label>Author Name</label>
              <input
                className={errors.author ? "error" : ""}
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
              />

              {errors.author && <p className="error-text">{errors.author}</p>}
            </div>

            <div className="form-group">
              <label>Featured Image URL (Optional)</label>
              <input
                className={errors.image ? "error" : ""}
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />

              {errors.image && <p className="error-text">{errors.image}</p>}
            </div>

            <div className="form-group">
              <label>Content</label>

              <textarea
                className={errors.content ? "error" : ""}
                rows="8"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your blog here..."
                maxLength={1000}
              ></textarea>
             <p
  className="character-count"
  style={{
    color: formData.content.length > 900 ? "#EF4444" : "#64748B",
  }}
>
  {formData.content.length} / 1000 characters
</p>
              {errors.content && <p className="error-text">{errors.content}</p>}
            </div>

            <button
              type="submit"
              className="publish-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AddBlog;
