using Microsoft.AspNetCore.Mvc;
using BlogManagement.API.Models;

namespace BlogManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogsController : ControllerBase
    {
        private static List<Blog> blogs = new()
        {
            new Blog
            {
                Id = 1,
                Title = "Getting Started with ASP.NET Core",
                Category = "Technology",
                Author = "Ashfana",
                Image = "",
                Content = "Learn ASP.NET Core Web API."
            },

            new Blog
            {
                Id = 2,
                Title = "React Development",
                Category = "Programming",
                Author = "Ashfana",
                Image = "",
                Content = "Learn React Fundamentals."
            }
        };

        // GET
        [HttpGet]
        public IActionResult GetBlogs()
        {
            return Ok(blogs);
        }

        // GET BY ID
        [HttpGet("{id}")]
        public IActionResult GetBlog(int id)
        {
            var blog = blogs.FirstOrDefault(x => x.Id == id);

            if (blog == null)
                return NotFound();

            return Ok(blog);
        }

        // POST
        [HttpPost]
        public IActionResult CreateBlog([FromBody] Blog blog)
        {
            blog.Id = blogs.Count == 0 ? 1 : blogs.Max(x => x.Id) + 1;

            blogs.Add(blog);

            return Ok(blog);
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult UpdateBlog(int id, [FromBody] Blog updatedBlog)
        {
            var blog = blogs.FirstOrDefault(x => x.Id == id);

            if (blog == null)
            {
                return NotFound(new
                {
                    message = "Blog not found"
                });
            }

            blog.Title = updatedBlog.Title;
            blog.Category = updatedBlog.Category;
            blog.Author = updatedBlog.Author;
            blog.Image = updatedBlog.Image;
            blog.Content = updatedBlog.Content;

            return Ok(new
            {
                message = "Blog updated successfully",
                data = blog
            });
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult DeleteBlog(int id)
        {
            var blog = blogs.FirstOrDefault(x => x.Id == id);

            if (blog == null)
            {
                return NotFound(new
                {
                    message = "Blog not found"
                });
            }

            blogs.Remove(blog);

            return Ok(new
            {
                message = "Blog deleted successfully"
            });
        }
    }
}