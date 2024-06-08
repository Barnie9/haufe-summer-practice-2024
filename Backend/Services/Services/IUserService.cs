using Models;

namespace Services;

public interface IUserService
{
    Task<List<string>> GetAllUserEmailsAsync();
    Task<UserDto?> GetByEmailAsync(string email);
    Task<UserDto> CreateAsync(UserDto user);
    Task<List<String>> GetGroupNamesAsync(Guid userId);
}