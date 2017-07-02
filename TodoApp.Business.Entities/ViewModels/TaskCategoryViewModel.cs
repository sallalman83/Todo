using System;

namespace TodoApp.Business.Entities.ViewModels
{
    public class TaskCategoryViewModel
    {
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public string Color { get; set; }
        public int OrderId { get; set; }
        public bool IsArchived { get; set; }
        public int CreateByUserId { get; set; }

    }
}
