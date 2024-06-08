using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models;

public class Recommendation
{
    public Guid Id { get; set; }

    [Required, StringLength(1024)]
    public string Link { get; set; }

    [Required, StringLength(1024)]
    public string Description { get; set; }

    [Required, StringLength(128)]
    public string Location { get; set; }

    [Required]
    public double Rating { get; set; }

    [Required, Column(TypeName = "image")]
    public byte[] Image { get; set; }

    public Guid UserId { get; set; }
    public User? User { get; set; }
}