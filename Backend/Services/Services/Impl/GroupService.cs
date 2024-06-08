using Models;

namespace Services;

public class GroupService : IGroupService
{
    private readonly IUserRepository _userRepository;
    private readonly IGroupRepository _groupRepository;

    public GroupService(IUserRepository userRepository, IGroupRepository groupRepository)
    {
        _userRepository = userRepository;
        _groupRepository = groupRepository;
    }

    public async Task<GroupDto?> CreateAsync(Guid userId, GroupDto groupDto)
    {
        var group = Group.FromGroupDto(groupDto);

        var user = await _userRepository.GetByIdAsync(userId);

        if (user == null)
        {
            return null;
        }

        group.Members.Add(user);

        groupDto.UserEmails.ForEach(async email =>
        {
            var member = await _userRepository.GetByEmailAsync(email);

            if (member != null)
            {
                group.Members.Add(member);
            }
        });

        group = await _groupRepository.CreateAsync(group);

        return GroupDto.FromGroup(group);
    }
}