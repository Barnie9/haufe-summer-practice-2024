using Microsoft.EntityFrameworkCore;
using Models;

namespace Services;

public class GroupRepository : IGroupRepository
{
    private readonly MyDbContext _context;
    private readonly DbSet<Group> _groups;

    public GroupRepository(MyDbContext context)
    {
        _context = context;
        _groups = context.Groups;
    }

    public async Task<Group> CreateAsync(Group group)
    {
        var entry = await _groups.AddAsync(group);

        await _context.SaveChangesAsync();

        return entry.Entity;
    }
}