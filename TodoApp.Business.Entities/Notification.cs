//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TodoApp.Business.Entities
{
    using System;
    using System.Collections.Generic;
    
    public partial class Notification
    {
        public long Id { get; set; }
        public System.DateTime CreateDate { get; set; }
        public int CreateByUserId { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<System.DateTime> LastUpdateDate { get; set; }
        public Nullable<int> LastUpdateByUserId { get; set; }
    }
}
