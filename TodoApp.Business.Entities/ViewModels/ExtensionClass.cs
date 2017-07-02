using System;
using System.Collections.Generic;
using System.Linq;

namespace TodoApp.Business.Entities.ViewModels
{
    public static class ExtensionClass
    {
        public static List<TaskCategoryViewModel> ToViewModel(this IList<TaskCategory> categories)
        {
            var _list = new List<TaskCategoryViewModel>();
            categories.ToList().ForEach(x =>
            {
                _list.Add(new TaskCategoryViewModel()
                {
                    Color = x.Color,
                    CreateDate = x.CreateDate,
                    Id = x.Id,
                    IsArchived = x.IsArchived,
                    LastUpdateDate = x.LastUpdateDate,
                    Name = x.Name,
                    OrderId = x.OrderId,
                    UserId = x.UserId
                });
            });
            return _list;
        }

        public static TaskCategory MapToEntity(this TaskCategoryViewModel taskCategoryViewModel)
        {
            var _taskCategory = new TaskCategory();
            _taskCategory.Id = taskCategoryViewModel.Id;
            _taskCategory.CreateDate = taskCategoryViewModel.CreateDate;
            _taskCategory.CreateByUserId = taskCategoryViewModel.CreateByUserId;
            _taskCategory.IsDeleted = false;
            _taskCategory.LastUpdateDate = taskCategoryViewModel.LastUpdateDate;
            _taskCategory.Name = taskCategoryViewModel.Name;
            _taskCategory.UserId = taskCategoryViewModel.UserId;
            _taskCategory.Color = taskCategoryViewModel.Color;
            _taskCategory.OrderId = taskCategoryViewModel.OrderId;
            _taskCategory.IsArchived = taskCategoryViewModel.IsArchived;
            return _taskCategory;
        }

        public static List<UserTaskViewModel> ToViewModel(this IList<UserTask> categories)
        {
            var _list = new List<UserTaskViewModel>();
            categories.ToList().ForEach(x =>
            {
                _list.Add(new UserTaskViewModel()
                {
                    Id = x.Id,
                    AssignedTo = x.AssignedTo,
                    Title = x.Title,
                    StartDateString = x.StartDate.ToString("dd/MM/yyyy"),
                    StartDateTime = x.StartDate.ToString("hh:mm tt"),
                    StatusId = x.TaskEnumStatusId
                });
            });
            return _list;
        }

        public static UserTask MapToEntity(this UserTaskViewModel taskCategoryViewModel)
        {
            var _UserTask = new UserTask();
            _UserTask.Id = taskCategoryViewModel.Id;
            _UserTask.IsDeleted = false;
            _UserTask.Title = taskCategoryViewModel.Title;
            _UserTask.StartDate = Convert.ToDateTime(taskCategoryViewModel.StartDateString + " " + taskCategoryViewModel.StartDateTime);
            _UserTask.TaskEnumStatusId = taskCategoryViewModel.StatusId;
            _UserTask.AssignedTo = taskCategoryViewModel.AssignedTo;
            return _UserTask;
        }
    }
}
