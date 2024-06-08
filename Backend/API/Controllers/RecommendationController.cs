using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace API;

[Route("api/[controller]")]
[Authorize]
[ApiController]
public class RecommendationController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IRecommendationService _recommendationService;

    public RecommendationController(IUserService userService, IRecommendationService recommendationService)
    {
        _userService = userService;
        _recommendationService = recommendationService;
    }

    [HttpGet]
    public async Task<IActionResult> GetRecommendationsAsync()
    {
        var recommendations = await _recommendationService.GetRecommendationsAsync();

        return Ok(recommendations);
    }

    [HttpPost]
    public async Task<IActionResult> CreateAsync([FromBody] RecommendationDto recommendationDto)
    {
        var currentUserEmail = HttpContext.User.Identity!.Name;

        var user = await _userService.GetByEmailAsync(currentUserEmail!);

        if (user == null)
        {
            return Unauthorized();
        }

        var recommendation = await _recommendationService.CreateAsync(user.Id, recommendationDto);

        if (recommendation == null)
        {
            return BadRequest();
        }

        return Ok(recommendation);
    }
}
