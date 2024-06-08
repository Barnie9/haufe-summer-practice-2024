using Models;

namespace Services;

public interface IGroupRepository
{
    Task<Group> CreateAsync(Group group);
}