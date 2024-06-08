using Models;

namespace Services;

public interface IRecommendationService
{
    Task<IEnumerable<RecommendationDto>> GetRecommendationsAsync();
    Task<RecommendationDto> CreateAsync(RecommendationDto recommendationDto);
}