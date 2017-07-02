using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoApp.Business.Entities.ViewModels
{
    public class RegisterUserViewModel
    {
        public RegisterUserViewModel()
        { 
            RememberMe = false;
        }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        public bool RememberMe { get; set; } 
    }
}
