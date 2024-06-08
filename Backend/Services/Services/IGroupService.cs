using Models;

namespace Services;

public interface IGroupService
{
    Task<GroupDto?> CreateAsync(Guid userId, GroupDto groupDto);
}