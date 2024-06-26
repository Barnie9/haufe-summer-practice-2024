﻿using Models;

namespace Services;

public interface IRecommendationService
{
    Task<IEnumerable<RecommendationDto>> GetRecommendationsAsync();
    Task<RecommendationDto?> CreateAsync(Guid userId, RecommendationDto recommendationDto);
}