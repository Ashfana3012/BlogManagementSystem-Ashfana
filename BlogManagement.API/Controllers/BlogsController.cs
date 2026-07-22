using Microsoft.AspNetCore.Mvc;

namespace BlogManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogsController : ControllerBase
    {

        private static List<object> blogs = new()
        {
            new
            {
                id = 1,
                title = "Getting Started with ASP.NET Core",
                author = "Ashfana"
            },

            new
            {
                id = 2,
                title = "React Development",
                author = "Ashfana"
            }
        };


        // GET: api/blogs
        [HttpGet]
        public IActionResult GetBlogs()
        {
            return Ok(blogs);
        }



        // POST: api/blogs
        [HttpPost]
        public IActionResult CreateBlog([FromBody] object blog)
        {
            blogs.Add(blog);

            return Ok(new
            {
                message = "Blog created successfully",
                data = blog
            });
        }

    }
}