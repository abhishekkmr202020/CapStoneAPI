using EntityLib;
using Microsoft.EntityFrameworkCore;
using System;

namespace DataLibrary
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<Items> Items { get; set; }
        public DbSet<Cart> Cart { get; set; }
    }
}
