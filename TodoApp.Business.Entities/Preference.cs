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
    
    public partial class Preference
    {
        public long Id { get; set; }
        public System.DateTime CreateDate { get; set; }
        public int CreateByUserId { get; set; }
        public bool IsDeleted { get; set; }
        public Nullable<System.DateTime> LastUpdateDate { get; set; }
        public Nullable<int> LastUpdateByUserId { get; set; }
        public int UserId { get; set; }
        public int LanguageId { get; set; }
        public int StartPageEnumTypeId { get; set; }
        public Nullable<long> StartPageId { get; set; }
        public int ThemeTypeId { get; set; }
        public int DateFormatTypeId { get; set; }
        public int TimeFormatTypeId { get; set; }
        public int TimeZoneTypeId { get; set; }
        public int StartOfWeekTypeId { get; set; }
        public bool DailyDigestTypeId { get; set; }
        public bool NewsLetterTypeId { get; set; }
    }
}
