﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace TodoApp.Business.Entities.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } 

        [Display(Name = "Email")] 
        public string Email { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }

    }
}
