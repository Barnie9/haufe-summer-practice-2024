using System.ComponentModel.DataAnnotations;

namespace Models;

public class User
{
    public Guid Id { get; set; }

    [Required, StringLength(128)] public string Name { get; set; } = "";

    [Required, EmailAddress, StringLength(1024)]
    public string Email { get; set; } = "";

    public List<Group> Groups { get; set; } = [];

    public static User FromUserDto(UserDto userDto)
    {
        return new User
        {
            Id = userDto.Id,
            Name = userDto.Name,
            Email = userDto.Email
        };
    }
}