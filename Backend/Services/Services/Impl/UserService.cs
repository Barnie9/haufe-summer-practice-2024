using Models;

namespace Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<List<string>> GetAllUserEmailsAsync()
    {
        var users = await _userRepository.GetAllAsync();

        return users.Select(u => u.Email).ToList();
    }

    public async Task<UserDto?> GetByEmailAsync(string email)
    {
        var user = await _userRepository.GetByEmailAsync(email);

        if (user == null)
        {
            return null;
        }

        return UserDto.FromUser(user);
    }

    public async Task<UserDto> CreateAsync(UserDto user)
    {
        var newUser = await _userRepository.CreateAsync(User.FromUserDto(user));

        return UserDto.FromUser(newUser);
    }

    public async Task<List<String>> GetGroupNamesAsync(Guid userId)
    {
        var user = await _userRepository.GetByIdWithGroupsAsync(userId);

        if (user == null)
        {
            return new List<string>();
        }

        return user.Groups.Select(g => g.Name).ToList();
    }
}