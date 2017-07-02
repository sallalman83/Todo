using System.Collections.Generic;
using TodoApp.Business.Entities;
using TodoApp.Business.Entities.ViewModels;

namespace TodoApp.Web.Business.Interfaces
{
    public interface ITaskCategoryManager
    {
        List<TaskCategoryViewModel> GetUserCategories(int userId, bool isArchived);
        void CreateUserDefaultCategories(int userId); 
        void Save(TaskCategory taskCategory);
        TaskCategory GetTaskCategoryById(long taskCategoryId);
    }
}
