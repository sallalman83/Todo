using System.Web.Http;
using System.Web.Http.Cors;

namespace TodoApp.Web.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            var corsAttr = new EnableCorsAttribute("http://localhost:24988", "*", "*");
            config.EnableCors(corsAttr);
        }
    }
}
