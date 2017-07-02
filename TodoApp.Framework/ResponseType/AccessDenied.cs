namespace TodoApp.Framework.ResponseType
{
    public class GenericResponse
    {
        public static ResponseResult AccessDenied
        {
            get
            {
                var _result = new ResponseResult();
                _result.Message = "Access Denied...";
                _result.Result = null;
                _result.StatusCode = 401;
                return _result;
            }
        }
    }
}
