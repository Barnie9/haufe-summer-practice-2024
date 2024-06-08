namespace Models;

public class GroupDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = "";
    public List<string>? UserEmails { get; set; } = [];

    public static GroupDto FromGroup(Group group)
    {
        return new GroupDto
        {
            Id = group.Id,
            Name = group.Name,
            UserEmails = group.Members.Select(u => u.Email).ToList()
        };
    }
}