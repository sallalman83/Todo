using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace TodoApp.Business.Entities.Membership
{
    public class ApplicationUser : IdentityUser<int, UserLogin, UserRole, UserClaim>
    {
        public DateTime? ActiveUntil;

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(Microsoft.AspNet.Identity.UserManager<ApplicationUser, int> manager, string defaultAuthenticationTypes  )
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, defaultAuthenticationTypes);
            // Add custom user claims here
            return userIdentity;
        }
    }
}
