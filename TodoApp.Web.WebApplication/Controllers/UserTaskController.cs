using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TodoApp.Web.WebApplication.Controllers
{ 
    public class UserTaskController : Controller
    {
        // GET: UserTask
        public ActionResult Index()
        {
            return View();
        }
    }
}