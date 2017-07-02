using System.Collections.Generic;

namespace TodoApp.Framework.ResponseType
{
    public enum OperationResult : int
    {
        Sucess = 1,
        Failed = 2
    }
    public class ValidationResult
    {
        public ValidationResult()
        {
            Key = string.Empty;
            Message = string.Empty;
        }
        public string Key { get; set; }
        public string Message { get; set; }

    }
    public class CRUDResult
    {
        public CRUDResult()
        {
            Validations = new List<ValidationResult>();
            Result = OperationResult.Sucess;
        }
        public OperationResult Result { get; set; }
        public IList<ValidationResult> Validations { get; set; }

    }
}
