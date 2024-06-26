using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace API;

[Route("api/[controller]")]
[Authorize]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<List<string>>> GetAllUserEmails()
    {
        var emails = await _userService.GetAllUserEmailsAsync();

        return Ok(emails);
    }

    [HttpPost]
    public async Task<ActionResult<UserDto>> CreateUser([FromBody] UserDto userDto)
    {
        var currentUserEmail = HttpContext.User.Identity!.Name;

        var user = await _userService.GetByEmailAsync(currentUserEmail!);

        if (user == null)
        {
            user = await _userService.CreateAsync(userDto);
        }

        return Ok(user);
    }

    [HttpGet("groups")]
    public async Task<ActionResult<List<String>>> GetGroupNames()
    {
        var currentUserEmail = HttpContext.User.Identity!.Name;

        var user = await _userService.GetByEmailAsync(currentUserEmail!);

        if (user == null)
        {
            return NotFound();
        }

        var groupNames = await _userService.GetGroupNamesAsync(user.Id);

        return Ok(groupNames);
    }
}
