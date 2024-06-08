using Microsoft.EntityFrameworkCore;
using Models;

namespace Services;

public class UserRepository : IUserRepository
{
    private readonly MyDbContext _context;
    private readonly DbSet<User> _users;

    public UserRepository(MyDbContext context)
    {
        _context = context;
        _users = context.Users;
    }

    public async Task<List<User>> GetAllAsync()
    {
        return await _users.ToListAsync();
    }

    public async Task<User?> GetByIdAsync(Guid id)
    {
        return await _users.FirstOrDefaultAsync(u => u.Id == id);
    }

    public async Task<User?> GetByEmailAsync(string email)
    {
        return await _users.FirstOrDefaultAsync(u => u.Email == email);
    }

    public async Task<User> CreateAsync(User user)
    {
        _users.Add(user);

        await _context.SaveChangesAsync();

        return user;
    }

    public async Task<User?> GetByIdWithGroupsAsync(Guid id)
    {
        return await _users
            .Include(u => u.Groups)
            .FirstOrDefaultAsync(u => u.Id == id);
    }
}