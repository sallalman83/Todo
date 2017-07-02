using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using TodoApp.Business.Entities.ViewModels;
using TodoApp.Framework.ResponseType;
using TodoApp.Web.Business.Managers.Membership;
using TodoApp.Framework.Web;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using System.Collections.Generic;
using System.Net.Http;
using TodoApp.Business.Entities.Membership;


namespace TodoApp.Web.WebAPI.Controllers
{
    public class UserController : BaseApiController
    {
        public UserController() { }
        public UserController(ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat,
            ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            AccessTokenFormat = accessTokenFormat;
            SignInManager = signInManager;
        }

        [HttpGet]
        public bool IsUserNameExists(string userName)
        {
            return UserManager.FindByName(userName) != null;
        }

        [HttpPost]
        public async Task<IHttpActionResult> RegisterNewUser(RegisterUserViewModel registerUserViewModel)
        {
            var result = new ResponseResult();
            result.Result = result.Message = "0";
            if (!ModelState.IsValid)
                return Ok(result);

            var user = new ApplicationUser { UserName = registerUserViewModel.UserName };
            var createResult = await UserManager.CreateAsync(user, registerUserViewModel.Password);
            if (createResult.Succeeded)
            {
                result.Result = result.Message = "1";
                UserManager.AddToRole(user.Id, "TODO User"); 
            }
            else
            {
                var _errors = new List<string>();
                foreach (var error in createResult.Errors)
                    _errors.Add(error);
                result.Result = _errors;
            }

            return Ok(result);
        }

        [HttpGet]
        public IHttpActionResult IsAuthenticated()
        {
            var result = new ResponseResult();
            result.Message = User.Identity.IsAuthenticated ? "1" : "0";
            result.Result = User.Identity.IsAuthenticated;
            return Ok(result);
        }

        [HttpPost]
        public async Task<IHttpActionResult> LoginUser(LoginViewModel model)
        {
            var result = new ResponseResult();
            result.Result = result.Message = "0";
            if (!ModelState.IsValid)
                return Ok(result);

            var pairs = new List<KeyValuePair<string, string>>
                    {
                        new KeyValuePair<string, string>( "grant_type", "password" ),
                        new KeyValuePair<string, string>( "username", model.UserName ),
                        new KeyValuePair<string, string> ( "Password", model.Password )
                    };
            var content = new FormUrlEncodedContent(pairs);
            using (var client = new HttpClient())
            {
                var response = client.PostAsync("http://localhost:46782/Token", content).Result;
                result.Result = response.Content.ReadAsStringAsync().Result;
                return Ok(result);
            }

        }

        [HttpPost]
        public IHttpActionResult Logout()
        {
            var result = new ResponseResult();
            Authentication.SignOut(DefaultAuthenticationTypes.ExternalBearer);
            Authentication.SignOut(DefaultAuthenticationTypes.ExternalCookie);
            Authentication.SignOut(DefaultAuthenticationTypes.TwoFactorCookie);
            Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            Authentication.SignOut(DefaultAuthenticationTypes.TwoFactorRememberBrowserCookie);
            result.Message = "User Logout";
            return Ok(result);
        }
        public void RegisterUser()
        {

        }

        public void ForgetPassword()
        {

        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && _userManager != null)
            {
                _userManager.Dispose();
                _userManager = null;
            }

            base.Dispose(disposing);
        }
    }
}
