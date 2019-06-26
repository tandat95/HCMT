using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HCMT.Library.Model
{
    public class HcmTemp { 
        public List<string> DistrictNames { get; set; }
        public DateTime Time { get; set; }
        public string[] Value { get; set; }
        //public string District { get; set; }
    }
}
