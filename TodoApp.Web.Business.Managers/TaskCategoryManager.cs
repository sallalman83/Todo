using System;
using System.Collections.Generic;
using System.Linq;
using TodoApp.Business.Entities;
using TodoApp.Business.Entities.ViewModels;
using TodoApp.Web.Business.Interfaces;

namespace TodoApp.Web.Business.Managers
{
    public class TaskCategoryManager : ITaskCategoryManager
    {
        public List<TaskCategoryViewModel> GetUserCategories(int userId, bool isArchived)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                var _categories = context.TaskCategories.Where(x =>
                x.UserId == userId
                &&
                x.IsArchived == isArchived
                &&
                x.IsDeleted != true)
                .OrderBy(x => x.OrderId).ToList();
                return _categories.ToViewModel();
            }
        }

        public void Save(TaskCategory taskCategory)
        {
            if (taskCategory.Id == 0)
            {
                using (var context = new ToDoAppStoreEntities())
                {
                    context.TaskCategories.Add(taskCategory);
                    context.SaveChanges();
                }
            }
            else
            {
                using (var context = new ToDoAppStoreEntities())
                {
                    context.Entry(taskCategory).State = System.Data.Entity.EntityState.Modified;
                    context.SaveChanges();
                }
            }
        }
        public TaskCategory GetTaskCategoryById(long taskCategoryId)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                return context.TaskCategories.Where(x => x.Id == taskCategoryId).FirstOrDefault();
            }
        }

        public void CreateUserDefaultCategories(int userId)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                var _taskCategory = new TaskCategory();
                _taskCategory.CreateDate = DateTime.Now;
                _taskCategory.CreateByUserId = userId;
                _taskCategory.IsDeleted = false;
                _taskCategory.Name = "Personal";
                _taskCategory.UserId = userId;
                _taskCategory.Color = "#000000";
                _taskCategory.OrderId = 0;
                _taskCategory.IsArchived = false;
                context.TaskCategories.Add(_taskCategory);
                _taskCategory = new TaskCategory();
                _taskCategory.CreateDate = DateTime.Now;
                _taskCategory.CreateByUserId = userId;
                _taskCategory.IsDeleted = false;
                _taskCategory.Name = "Errands";
                _taskCategory.UserId = userId;
                _taskCategory.Color = "#D9534F";
                _taskCategory.OrderId = 0;
                _taskCategory.IsArchived = false;
                context.TaskCategories.Add(_taskCategory);
                _taskCategory = new TaskCategory();
                _taskCategory.CreateDate = DateTime.Now;
                _taskCategory.CreateByUserId = userId;
                _taskCategory.IsDeleted = false;
                _taskCategory.Name = "Shopping";
                _taskCategory.UserId = userId;
                _taskCategory.Color = "#428BCA";
                _taskCategory.OrderId = 0;
                _taskCategory.IsArchived = false;
                context.TaskCategories.Add(_taskCategory);
                _taskCategory = new TaskCategory();
                _taskCategory.CreateDate = DateTime.Now;
                _taskCategory.CreateByUserId = userId;
                _taskCategory.IsDeleted = false;
                _taskCategory.Name = "Movie to watch";
                _taskCategory.UserId = userId;
                _taskCategory.Color = "#145C14";
                _taskCategory.OrderId = 0;
                _taskCategory.IsArchived = false;
                context.TaskCategories.Add(_taskCategory);
                context.SaveChanges();
            }
        }

    }
}
