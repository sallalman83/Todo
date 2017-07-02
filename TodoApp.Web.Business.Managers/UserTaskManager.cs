using System;
using TodoApp.Business.Entities;
using TodoApp.Web.Business.Interfaces;
using System.Linq;
using System.Collections.Generic;

namespace TodoApp.Web.Business.Managers
{
    public class UserTaskManager : IUserTaskManager
    {
        public bool CheckExistsWithSameTitle(int userId, string title)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                return context.UserTasks.Where(x =>
                x.IsDeleted != true
                &&
                x.CreateByUserId == userId
                &&
                x.Title == title).Count() > 0;
            }
        }

        public List<UserTask> GetAllUserTasks(int userId)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                var _userTasks = context.UserTasks.Where(x =>
                  x.IsDeleted != true
                  &&
                  x.CreateByUserId == userId).ToList();
                return _userTasks;
            }
        }

        public UserTask GetUserTaskById(long userTaskId)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                var _userTask = context.UserTasks.Where(x => 
                  x.Id == userTaskId).FirstOrDefault();
                return _userTask;
            }
        }

        public void Save(UserTask userTask)
        {
            using (var context = new ToDoAppStoreEntities())
            {
                if (userTask.Id == 0)
                {
                    context.UserTasks.Add(userTask);
                    context.SaveChanges();
                }
                else
                {
                    context.Entry(userTask).State = System.Data.Entity.EntityState.Modified;
                    context.SaveChanges();
                }
            }
        }
    }
}
