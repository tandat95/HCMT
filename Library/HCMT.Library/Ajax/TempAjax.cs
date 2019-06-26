using AjaxPro;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HCMT.Library.Model;
using HCMT.Library.Provider;

namespace HCMT.Library.Ajax
{
    public class TempAjax
    {
        [AjaxMethod]
        public void InsertTemp()
        {
            MongoProvider.InsertData();
        }
        [AjaxMethod]
        public List<HcmTemp> ImportData()
        {
            return MongoProvider.ImportData();
        }

        [AjaxMethod]
        public List<HcmTemp> GetTempData(DateTime startTime, DateTime endTime)
        {
            return MongoProvider.GetTempData(startTime, endTime);
        }
    }
}
