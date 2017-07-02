using System;
using System.Runtime.Serialization;

namespace TodoApp.Business.Entities.ViewModels
{
    [Serializable]
    [DataContract]
    public class UserInfoViewModel
    {
        public string Email { get; set; }

        public bool HasRegistered { get; set; }

        public string LoginProvider { get; set; }
    }
}
