using Microsoft.Owin.Security;
using System.Web.Http;
using TodoApp.Business.Entities.ViewModels;
using TodoApp.Framework.ResponseType;
using TodoApp.Framework.Web;
using TodoApp.Web.Business.Interfaces;
using TodoApp.Web.Business.Managers;
using TodoApp.Web.Business.Managers.Membership;
using TodoApp.Web.WebAPI.Helpers;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.AspNet.Identity;

namespace TodoApp.Web.WebAPI.Controllers
{
    public class CategoryController : BaseApiController
    {
        public CategoryController() { }
        public CategoryController(ApplicationUserManager userManager,
            ISecureDataFormat<AuthenticationTicket> accessTokenFormat,
            ApplicationSignInManager signInManager)
        {
            UserManager = userManager;
            AccessTokenFormat = accessTokenFormat;
            SignInManager = signInManager;
        }

        [HttpGet]
        public IHttpActionResult GetUserCategories(bool isArchived)
        {
            var result = new ResponseResult();
            ITaskCategoryManager _taskManager = new TaskCategoryManager(); 
            var _categories = _taskManager.GetUserCategories(User.Identity.GetUserId<int>(), isArchived);
            result.Result = _categories.Serialize<TaskCategoryViewModel>();
            return Ok(result);
        }

        [HttpPost]
        public IHttpActionResult CreateNewTaskCategory([FromBody] TaskCategoryViewModel taskCategory)
        {
            var _CRUDResult = new CRUDResult();
            var result = new ResponseResult();
            ITaskCategoryManager _taskManager = new TaskCategoryManager();
            var _taskCategory = taskCategory.MapToEntity();
            _taskCategory.CreateDate = DateTime.Now;
            _taskCategory.CreateByUserId = User.Identity.GetUserId<int>();
            _taskCategory.UserId = User.Identity.GetUserId<int>();
            _taskManager.Save(_taskCategory);
            result.Result = _CRUDResult;
            return Ok(result);
        }

        [HttpPost]
        public IHttpActionResult SaveTaskCategoriesOrders([FromBody] List<int> taskCategoryIds)
        {
            var result = new ResponseResult();
            ITaskCategoryManager _taskManager = new TaskCategoryManager();
            var _counter = 0;
            foreach (var id in taskCategoryIds)
            {
                var _taskCategory = _taskManager.GetTaskCategoryById(id);
                if (_taskCategory.UserId == User.Identity.GetUserId<int>())
                {
                    _taskCategory.OrderId = _counter;
                    _taskManager.Save(_taskCategory);
                }
                _counter += 1;
            }
            return Ok(result);
        }

        [HttpPut]
        public IHttpActionResult UpdateNewTaskCategory([FromBody] TaskCategoryViewModel taskCategory)
        {
            var _CRUDResult = new CRUDResult();
            var result = new ResponseResult();
            ITaskCategoryManager _taskManager = new TaskCategoryManager();
            var _originalObject = _taskManager.GetTaskCategoryById(taskCategory.Id);
            if (_originalObject.UserId == User.Identity.GetUserId<int>())
                TaskCategoryHelper.MapToEntity(_originalObject, taskCategory);
            else
                return Ok(GenericResponse.AccessDenied);
            _taskManager.Save(_originalObject);
            result.Result = _CRUDResult;
            return Ok(result);
        }

        [HttpDelete]
        public IHttpActionResult DeleteTaskCategory(int taskCategoryId)
        {
            var _CRUDResult = new CRUDResult();
            var result = new ResponseResult();
            ITaskCategoryManager _taskManager = new TaskCategoryManager();
            var _taskCategory = _taskManager.GetTaskCategoryById(taskCategoryId);
            if (_taskCategory.CreateByUserId == User.Identity.GetUserId<int>())
            {
                _taskCategory.IsDeleted = true;
                // TODO: oalsallal: delete all Tasks related to this category
                _taskManager.Save(_taskCategory);
            }
            else
                return Ok(GenericResponse.AccessDenied);
            result.Result = _CRUDResult;
            return Ok(result);
        }
    }
}
