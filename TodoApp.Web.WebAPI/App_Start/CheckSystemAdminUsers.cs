using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Configuration;
using TodoApp.Business.Entities.Membership;
using TodoApp.Web.Business.Managers.Membership;

namespace TodoApp.Web.WebAPI.App_Start
{
    public class CheckSystemAdminUsers
    {
        public static void CheckSystemDefaultUser()
        {
            CheckSystemDefaultRole();
            CheckExistanceSystemDefaultUser();

        }
        private static void CheckSystemDefaultRole()
        {
            var roleManager = new ApplicationRoleManager(new RoleStore<Role, int, UserRole>(new ApplicationDbContext()));
            var roleresult = roleManager.Create<Role, int>(new Role("TODO User"));

        }
        private static void CheckExistanceSystemDefaultUser()
        {
            var userManager = new UserManager<ApplicationUser, int>(new UserStore<ApplicationUser, Role, int, UserLogin, UserRole, UserClaim>(new ApplicationDbContext()));
            var _user = userManager.FindByName(ConfigurationManager.AppSettings["DefaultUser"]);
            if (_user == null)
            {
                var user = new ApplicationUser
                {
                    UserName = ConfigurationManager.AppSettings["DefaultUser"]
                    ,
                    Email = ConfigurationManager.AppSettings["DefaultEmail"]
                };

                var result = userManager.Create(user, "Sallal1234");
                userManager.AddToRole(user.Id, "TODO User");
            }
            else
            {
                if (!userManager.IsInRole(_user.Id, "TODO User"))
                    userManager.AddToRole(_user.Id, "TODO User");
            }
        }
    }
}