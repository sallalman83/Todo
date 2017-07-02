using System.Collections.Generic;
using TodoApp.Business.Entities;

namespace TodoApp.Web.Business.Interfaces
{
    public interface IUserTaskManager
    {  
        void Save(UserTask userTask);

        bool CheckExistsWithSameTitle(int userId, string title);
        List<UserTask> GetAllUserTasks(int userId);
        UserTask GetUserTaskById(long userTaskId);
    }
}
