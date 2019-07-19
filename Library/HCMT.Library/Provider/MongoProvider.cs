using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.VisualBasic.FileIO;
using MongoDB;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using HCMT.Library.Model;
using System.IO;

namespace HCMT.Library.Provider
{
    public static class MongoProvider
    {

        public static MongoClient client = new MongoClient("mongodb://tdat:Tandat131754@cluster0-shard-00-00-ouaxz.mongodb.net:27017,cluster0-shard-00-01-ouaxz.mongodb.net:27017,cluster0-shard-00-02-ouaxz.mongodb.net:27017/HCMT?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority");
        public static MongoDatabase db = client.GetServer().GetDatabase("HCMT");

        public static void InsertData()
        {
            var temp = db.GetCollection<HcmShape>("hcm_shape");
            temp.InsertBatch<HcmShape>(new List<HcmShape>
            {
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q1",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.699729, 10.775622},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q2",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.757976, 10.785579},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q3",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.684472,10.784222},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q4",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.703909, 10.759568},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q5",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.669479,10.754911},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q6",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.635331,10.746819},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q7",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.727645,10.738845},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q8",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.642975,10.732831},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q9",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.819634,10.833773},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q10",
                    Coors = new List<List<double>>
                    {
                        new List<double>{ 106.667969, 10.772633},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q11",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.647869,10.763331},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "q12",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.652974, 10.873535},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "binh_chanh",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.538132,10.766431},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "binh_tan",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.600496, 10.761220},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "binh_thanh",
                    Coors = new List<List<double>>
                    {
                        new List<double>{ 106.712987, 10.810589},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "can_gio",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.869630, 10.543020},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "cu_chi",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.509199, 11.013186},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "go_vap",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.668554, 10.843326},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "hoc_mon",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.578731, 10.890168},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "nha_be",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.720779, 10.662997},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "phu_nhuan",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.677992,10.801583},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "tan_binh",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.653016, 10.811809},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "tan_phu",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.626460, 10.794323},
                    }
                },
                new HcmShape
                {
                    Type = "point",
                    Level = "district",
                    Name = "thu_duc",
                    Coors = new List<List<double>>
                    {
                        new List<double>{106.748443, 10.854439},
                    }
                }
            }
           );
        }

        public static bool ImportData(string fileName, MemoryStream memoryStream)
        {

            using (TextFieldParser parser = new TextFieldParser(memoryStream))
            {
                string logId = InsertDataHistoryLog(fileName);
                if (logId != null)
                {
                    try
                    {
                        parser.TextFieldType = FieldType.Delimited;
                        parser.SetDelimiters(",");
                        var listTemp = new List<HcmTemp>();
                        var districtNames = new List<string>();
                        while (!parser.EndOfData)
                        {

                            if (parser.LineNumber == 1)
                            {
                                districtNames = parser.ReadFields().ToList();
                                districtNames.RemoveAt(0);
                                continue;
                            }
                            string[] fields = parser.ReadFields();
                            var values = fields.Skip(1).ToArray();
                            var newValues = new List<double>();
                            for (int i = 0; i < values.Length; i++)
                            {
                                newValues.Add(double.Parse(values[i]));
                            }
                            listTemp.Add(new HcmTemp
                            {
                                DistrictNames = districtNames,
                                Time = DateTime.Parse(fields[0]),
                                Value = newValues.ToArray(),
                                LogId = logId
                            });
                            var dateTime = DateTime.Parse(fields[0]);
                        }
                        var temp = db.GetCollection<HcmTemp>("hcm_temp");
                        temp.InsertBatch<HcmTemp>(listTemp);
                        return true;
                    }
                    catch (Exception ex)
                    {
                        return false;
                    }
                }
                return false;
            }
        }

        public static string InsertDataHistoryLog(string fileName)
        {
            try
            {
                string id = Guid.NewGuid().ToString("N");
                var temp = db.GetCollection<DataHistoryLog>("data_history_log");
                temp.Insert<DataHistoryLog>(new DataHistoryLog
                {
                    FileName = fileName,
                    Time = DateTime.Now,
                    ID = id
                });
                return id;
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        public static List<DataHistoryLog> GetAllDataHistoryLog()
        {
            return db.GetCollection<DataHistoryLog>("data_history_log").FindAll()
                .SetFields(Fields.Exclude("_id").Include("FileName", "Time", "ID"))
                .ToList();
        }

        public static bool DeleteDataByIds(string[] IDs)
        {
            var dataLog = db.GetCollection<DataHistoryLog>("data_history_log");
            var hcmtemp = db.GetCollection<HcmTemp>("hcm_temp");

            try
            {
                for (var i = 0; i < IDs.Length; i++)
                {
                    dataLog.Remove(Query.EQ("ID", IDs[i]));
                    hcmtemp.Remove(Query.EQ("LogId", IDs[i]));
                }
                return true;

            }
            catch
            {
                return false;
            }
        }
        public static List<HcmTemp> GetDataByLogId(string logId)
        {
            return db.GetCollection<HcmTemp>("hcm_temp").Find(Query.EQ("LogId", logId))
                .SetFields(Fields.Exclude("_id").Include("DistrictNames", "Time", "Value", "ID"))
                .ToList();
        }
        public static HcmShape GetHCMBound()
        {
            return db.GetCollection<HcmShape>("hcm_shape")
                .Find(Query.And(Query.EQ("Level", "province"), Query.EQ("Type", "polygon")))
                .SetFields(Fields.Exclude("_id").Include("Level", "Coors", "Type"))
                .FirstOrDefault();
        }
        public static List<HcmShape> GetAllDistrictPoint()
        {
            return db.GetCollection<HcmShape>("hcm_shape")
                .Find(Query.And(Query.EQ("Level", "district"), Query.EQ("Type", "point")))
                .SetFields(Fields.Exclude("_id").Include("Level", "Coors", "Type", "Name"))
                .ToList();
        }
        public static QueryResult GetTempData(DateTime startDate, DateTime endDate, int start, int limit)
        {
            var rs = db.GetCollection<HcmTemp>("hcm_temp")
                .Find(Query.And(Query.GTE("Time", startDate), Query.LTE("Time", endDate)))
                .SetFields(Fields.Exclude("_id").Include("DistrictNames", "Time", "Value"))
                .SetSkip(start)
                .SetLimit(limit);
                
            var hcmTempList = rs.ToList();
            if (hcmTempList.Count > 0)
            {
                var data = new List<object>();                
                for (var i = 0; i < hcmTempList.Count; i++)
                {
                    data.Add(new
                    {
                        Time = hcmTempList[i].Time,
                        Value = hcmTempList[i].Value,
                        Min = hcmTempList[i].Value.Min(),
                        Max = hcmTempList[i].Value.Max(),
                        DistrictNames = hcmTempList[i].DistrictNames,
                        ID = hcmTempList[i].ID,

                    });
                }
                return new QueryResult
                {
                    Data = data,
                    Success = true,
                    Total = rs.Count()
            };
            }
            return new QueryResult
            {
                Data = new List<object>(),
                Success = false,
                Total =0
            };
        }
    }
}
