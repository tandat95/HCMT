using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HCMT.Library.Model
{
    public class QueryResult
    {
        public List<object>  Data { get; set; }
        public bool Success { get; set; }
        public long Total { get; set; }
    }
}
