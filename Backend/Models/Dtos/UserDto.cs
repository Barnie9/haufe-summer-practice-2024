namespace Models;

public class UserDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    public static UserDto FromUser(User user) =>
        new()
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email
        };
}