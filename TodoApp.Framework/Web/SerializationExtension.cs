using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace TodoApp.Framework.Web
{
    public static class SerializationExtension 
    {
        public static string Serialize<T>(this List<T> obj) where T : class
        {
            var serialzer = new JavaScriptSerializer();
            return serialzer.Serialize(obj);
        }
    }
}
