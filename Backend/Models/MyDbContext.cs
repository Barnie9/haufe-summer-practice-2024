using Microsoft.EntityFrameworkCore;

namespace Models;

public class MyDbContext : DbContext
{
    public MyDbContext()
    {
    }

    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=localhost;Database=HaufeSummerPractice;Trusted_Connection=True;Encrypt=false");
    }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<Recommendation> Recommendations { get; set; }
}