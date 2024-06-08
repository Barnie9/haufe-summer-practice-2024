using System.ComponentModel.DataAnnotations;

namespace Models;

public class Group
{
    public Guid Id { get; set; }

    [Required, StringLength(128)]
    public string Name { get; set; } = "";

    public List<User> Members { get; set; } = [];

    public static Group FromGroupDto(GroupDto groupDto)
    {
        return new Group
        {
            Id = groupDto.Id,
            Name = groupDto.Name
        };
    }
}