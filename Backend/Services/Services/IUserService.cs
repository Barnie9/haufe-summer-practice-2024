using Models;

namespace Services;

public interface IUserService
{
    Task<UserDto?> GetByEmailAsync(string email);
    Task<UserDto> CreateAsync(UserDto user);
}