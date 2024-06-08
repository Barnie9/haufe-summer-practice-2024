namespace Models;

public class RecommendationDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Link { get; set; }
    public string Description { get; set; }
    public string Location { get; set; }
    public double Rating { get; set; }
    // public byte[] Image { get; set; }

    public string? UserName { get; set; }

    public static RecommendationDto FromRecommendation(Recommendation recommendation) =>
        new()
        {
            Id = recommendation.Id,
            Title = recommendation.Title,
            Link = recommendation.Link,
            Description = recommendation.Description,
            Location = recommendation.Location,
            Rating = recommendation.Rating,
            // Image = recommendation.Image,
            UserName = recommendation.User?.Name ?? string.Empty
        };
}