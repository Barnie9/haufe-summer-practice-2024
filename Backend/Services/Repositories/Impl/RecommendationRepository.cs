using Microsoft.EntityFrameworkCore;
using Models;

namespace Services;

public class RecommendationRepository : IRecommendationRepository
{
    private readonly MyDbContext _context;
    private readonly DbSet<Recommendation> _recommendations;

    public RecommendationRepository(MyDbContext context)
    {
        _context = context;
        _recommendations = context.Recommendations;
    }

    public async Task<IEnumerable<Recommendation>> GetRecommendationsAsync()
    {
        return await _recommendations.Include(entry => entry.User).ToListAsync();
    }

    public async Task<Recommendation> CreateAsync(Recommendation recommendation)
    {
        var result = await _recommendations.AddAsync(recommendation);

        await _context.SaveChangesAsync();

        return result.Entity;
    }
}