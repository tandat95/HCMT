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
        //[AjaxMethod]
        //public List<HcmTemp> ImportData(string fileName, string filePath)
        //{
        //    return MongoProvider.ImportData(fileName, filePath);
        //}

        [AjaxMethod]
        public HcmShape GetHCMBound()
        {
            return MongoProvider.GetHCMBound();
        }
        [AjaxMethod]
        public List<HcmShape> GetAllDistrictPoint()
        {
            return MongoProvider.GetAllDistrictPoint();
        }

        [AjaxMethod]
        public List<HcmTemp> GetTempData(DateTime startTime, DateTime endTime)
        {
            return MongoProvider.GetTempData(startTime, endTime);
        }
        [AjaxMethod]
        public List<DataHistoryLog> GetAllDataImportLog()
        {
            return MongoProvider.GetAllDataHistoryLog();
        }
        [AjaxMethod]
        public List<HcmTemp> GetDataByLogId(string logId)
        {
            return MongoProvider.GetDataByLogId(logId);
        }
        [AjaxMethod]
        public bool DeleteDataByIds(string[] IDs)
        {
            return MongoProvider.DeleteDataByIds(IDs);
        }
    }
}
