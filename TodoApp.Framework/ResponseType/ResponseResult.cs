namespace TodoApp.Framework.ResponseType
{
    public class ResponseResult
    {
        public ResponseResult()
        {
            StatusCode = 200;
            Success = true;
            Result = null;
            Message = string.Empty;
        }
        public int StatusCode { get; set; }
        public bool Success { get; set; }
        public string Message { get; set; }
        public object Result { get; set; }
    }
}
