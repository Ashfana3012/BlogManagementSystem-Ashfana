using Microsoft.AspNetCore.Mvc;

namespace BlogManagement.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Blog Management API is running successfully.");
        }
    }
}