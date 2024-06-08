using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace API;

[Route("api/[controller]")]
[Authorize]
[ApiController]
public class GroupController : ControllerBase
{
    private readonly IUserService _userService;
    private readonly IGroupService _groupService;

    public GroupController(IUserService userService, IGroupService groupService) {
        _userService = userService;
        _groupService = groupService;
    }

    [HttpPost]
    public async Task<ActionResult<GroupDto>> CreateGroup([FromBody] GroupDto groupDto) {
        var currentUserEmail = HttpContext.User.Identity!.Name;

        var user = await _userService.GetByEmailAsync(currentUserEmail!);

        if (user == null) {
            return Unauthorized();
        }

        var group = await _groupService.CreateAsync(user.Id, groupDto);

        if (group == null) {
            return BadRequest();
        }

        return Ok(group);
    }
}

