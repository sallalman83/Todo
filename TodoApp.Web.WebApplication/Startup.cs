using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TodoApp.Web.WebApplication.Startup))]
namespace TodoApp.Web.WebApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
