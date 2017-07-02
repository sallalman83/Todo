using TodoApp.Business.Entities;
using TodoApp.Business.Entities.ViewModels;

namespace TodoApp.Web.WebAPI.Helpers
{
    public class TaskCategoryHelper
    {
        public static void MapToEntity(TaskCategory originalObject,TaskCategoryViewModel taskCategoryViewModel)
        {
            originalObject.Id = taskCategoryViewModel.Id;
            originalObject.CreateDate = taskCategoryViewModel.CreateDate;
            originalObject.CreateByUserId = taskCategoryViewModel.CreateByUserId;
            originalObject.IsDeleted = false;
            originalObject.LastUpdateDate = taskCategoryViewModel.LastUpdateDate;
            originalObject.Name = taskCategoryViewModel.Name;
            originalObject.UserId = taskCategoryViewModel.UserId;
            originalObject.Color = taskCategoryViewModel.Color;
            originalObject.OrderId = taskCategoryViewModel.OrderId;
            originalObject.IsArchived = taskCategoryViewModel.IsArchived;
        }
    }
}