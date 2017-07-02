using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace TodoApp.Business.Entities.Membership
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, Role, int, UserLogin, UserRole, UserClaim>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); // This needs to go before the other rules!

            modelBuilder.Entity<ApplicationUser>().ToTable("ApplicationUsers").Property(p => p.Id).HasColumnType("int").HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Role>().ToTable("ApplicationRoles").Property(p => p.Id).HasColumnType("int").HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<UserRole>().ToTable("ApplicationUserRoles").HasKey(p => new { p.RoleId, p.UserId });
            modelBuilder.Entity<UserClaim>().ToTable("ApplicationUserClaims").Property(p => p.Id).HasColumnType("int").HasDatabaseGeneratedOption(System.ComponentModel.DataAnnotations.Schema.DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<UserLogin>().ToTable("ApplicationUserLogins").HasKey(p => new { p.LoginProvider, p.ProviderKey, p.UserId });
        }
    }
}
