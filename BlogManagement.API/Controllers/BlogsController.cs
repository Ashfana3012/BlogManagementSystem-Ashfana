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

        [HttpGet]
        public IActionResult GetBlogs()
        {
            return Ok(blogs);
        }

        [HttpPost]
        public IActionResult AddBlog(Blog blog)
        {
            blog.Id = blogs.Count + 1;

            blogs.Add(blog);

            return Ok(new
            {
                message = "Blog added successfully.",
                data = blog
            });
        }
    }
}