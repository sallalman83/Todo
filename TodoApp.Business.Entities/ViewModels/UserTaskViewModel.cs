using System;
using System.ComponentModel.DataAnnotations;
using TodoApp.Business.Entities.Enum;

namespace TodoApp.Business.Entities.ViewModels
{
    public class UserTaskViewModel
    {
        public UserTaskViewModel()
        {
            Id = 0;
            Title = string.Empty;
            AssignedTo = string.Empty;
            StatusId = Convert.ToInt32(UserTaskStatus.Create);
            StartDateString = string.Empty;
            StartDateTime = string.Empty;
        }
        public long Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string StartDateString { get; set; }
        [Required]
        public string StartDateTime { get; set; }
        public int StatusId { get; set; }
        public string AssignedTo { get; set; }
        public string Owner { get; set; }
        public string CategoryName { get; set; }
    }
}
