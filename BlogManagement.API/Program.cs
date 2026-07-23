
namespace BlogManagement.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(new WebApplicationOptions
            {
                Args = args
            });

            builder.Configuration.Sources
                .OfType<Microsoft.Extensions.Configuration.Json.JsonConfigurationSource>()
                .ToList()
                .ForEach(x => x.ReloadOnChange = false);


            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp", policy =>
                {
                    policy.WithOrigins("https://poetic-jalebi-58735f.netlify.app")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            builder.Services.AddControllers();


            var app = builder.Build();

            app.UseCors("AllowReactApp");

            // app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run("http://0.0.0.0:8080");
        }
    }
}
