using Models;

namespace Services;

public interface IRecommendationRepository
{
    Task<IEnumerable<Recommendation>> GetRecommendationsAsync();
    Task<Recommendation> CreateAsync(Recommendation recommendation);
}