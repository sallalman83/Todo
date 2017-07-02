using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using TodoApp.Business.Entities.ViewModels;
using TodoApp.Framework.ResponseType;
using TodoApp.Web.Business.Interfaces;
using TodoApp.Web.Business.Managers;
using Microsoft.AspNet.Identity;
using TodoApp.Business.Entities.Enum;

namespace TodoApp.Web.WebAPI.Controllers
{
    public class UserTaskController : ApiController
    {

        [HttpPost]
        public IHttpActionResult CreateNewQuickUserTask(UserTaskViewModel userTaskViewModel)
        {
            var userId = User.Identity.GetUserId<int>();
            userTaskViewModel.Title = userTaskViewModel.Title.Trim();
            userTaskViewModel.StatusId = Convert.ToInt32(UserTaskStatus.Create);
            var _CRUDResult = new CRUDResult();
            var result = new ResponseResult();
            IUserTaskManager _userTaskManager = new UserTaskManager();
            if (!_userTaskManager.CheckExistsWithSameTitle(userId, userTaskViewModel.Title))
            {
                var _userTask = userTaskViewModel.MapToEntity();
                _userTask.CreateDate = DateTime.Now;
                _userTask.CreateByUserId = userId;
                _userTaskManager.Save(_userTask);
            }
            else
            {
                _CRUDResult.Result = OperationResult.Failed;
                _CRUDResult.Validations.Add(new ValidationResult()
                {
                    Key = "",
                    Message = "Title already in use..."
                });
            }
            result.Result = _CRUDResult;
            return Ok(result);
        }


        [HttpPost]
        public IHttpActionResult getAllUserTasks()
        {
            var userId = User.Identity.GetUserId<int>();
            var userName = User.Identity.GetUserName();
            var result = new ResponseResult();
            IUserTaskManager _userTaskManager = new UserTaskManager();
            var _userTasks = _userTaskManager.GetAllUserTasks(userId).ToViewModel();
            _userTasks.ForEach(x => { x.Owner = userName; });
            result.Result = _userTasks;
            return Ok(result);
        }

        [HttpDelete]
        public IHttpActionResult DeleteUserTask(long userTaskId)
        {
            var userId = User.Identity.GetUserId<int>(); 
            var result = new ResponseResult();
            IUserTaskManager _userTaskManager = new UserTaskManager();
            var _userTask = _userTaskManager.GetUserTaskById(userTaskId);
            if (_userTask.CreateByUserId == userId)
            {
                _userTask.IsDeleted = true;
                _userTaskManager.Save(_userTask);
            }
            return Ok(result);
        }
    }
}
