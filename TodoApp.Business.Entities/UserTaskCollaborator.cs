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
    
    public partial class UserTaskCollaborator
    {
        public long Id { get; set; }
        public System.DateTime CreateDate { get; set; }
        public int CreateByUserId { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<System.DateTime> LastUpdateDate { get; set; }
        public Nullable<int> LastUpdateByUserId { get; set; }
        public long UserTaskId { get; set; }
        public int UserId { get; set; }
        public bool IsCreator { get; set; }
        public int PermissionEnumId { get; set; }
        public Nullable<System.DateTime> LastActionDate { get; set; }
        public Nullable<System.DateTime> JoinDate { get; set; }
        public Nullable<bool> Approved { get; set; }
        public Nullable<System.DateTime> DeleteDate { get; set; }
        public Nullable<int> DeleteByUserId { get; set; }
    }
}