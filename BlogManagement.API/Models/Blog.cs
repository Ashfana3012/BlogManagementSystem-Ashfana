namespace BlogManagement.API.Models
{
    public class Blog
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Category { get; set; } = string.Empty;

        public string Author { get; set; } = string.Empty;

        public string? Image { get; set; }

        public string Content { get; set; } = string.Empty;
    }
}