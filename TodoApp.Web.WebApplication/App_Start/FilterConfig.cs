﻿using System.Web;
using System.Web.Mvc;

namespace TodoApp.Web.WebApplication
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
