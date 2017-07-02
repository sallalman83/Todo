using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using TodoApp.Business.Entities.Membership;

namespace TodoApp.Web.Business.Managers.Membership
{
    public class ApplicationRoleManager : RoleManager<Role, int>
    {
        public ApplicationRoleManager(IRoleStore<Role, int> roleStore)
            : base(roleStore)
        {
        }

        public static ApplicationRoleManager Create(IdentityFactoryOptions<ApplicationRoleManager> options, IOwinContext context)
        {
            //return new ApplicationRoleManager(context.GetUserManager<ApplicationRoleManager>(), context.Authentication);
            return new ApplicationRoleManager(new RoleStore<Role, int, UserRole>(context.Get<ApplicationDbContext>()));
        }
    }
}
