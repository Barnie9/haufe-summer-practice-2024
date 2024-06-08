using Models;

namespace Services;

public class RecommendationService : IRecommendationService
{
    private readonly IRecommendationRepository _recommendationRepository;

    public RecommendationService(IRecommendationRepository recommendationRepository)
    {
        _recommendationRepository = recommendationRepository;
    }

    public async Task<IEnumerable<RecommendationDto>> GetRecommendationsAsync()
    {
        var recommendations = await _recommendationRepository.GetRecommendationsAsync();

        return recommendations.Select(RecommendationDto.FromRecommendation);
    }

    public async Task<RecommendationDto?> CreateAsync(Guid userId, RecommendationDto recommendationDto)
    {
        var recommendation = Recommendation.FromRecommendationDto(recommendationDto);
        recommendation.UserId = userId;

        recommendation = await _recommendationRepository.CreateAsync(recommendation);

        if (recommendation == null)
        {
            return null;
        }

        return RecommendationDto.FromRecommendation(recommendation);
    }
}