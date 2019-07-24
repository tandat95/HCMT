using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HCMT
{
    using HCMT.Library.Provider;
    using Newtonsoft.Json;

    /// <summary>
    /// Summary description for Upload
    /// </summary>
    using System;
    using System.IO;
    using System.Text;
    using System.Web;

    public class Upload : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            //context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");

            try
            {
                HttpPostedFile postedFile = context.Request.Files[0];
                if (postedFile.ContentLength == 0)
                    throw new Exception("Empty file received");

                // cannot restrict accept type on client
                //if (postedFile.ContentType == "image/png")  
                //  throw new Exception("PNG files not allowed");

                var csvBody = string.Empty;

                using (BinaryReader b = new BinaryReader(postedFile.InputStream))
                {
                    byte[] binData = b.ReadBytes(postedFile.ContentLength);
                    csvBody = Encoding.UTF8.GetString(binData);
                }

                var memoryStream = new MemoryStream();
                var streamWriter = new StreamWriter(memoryStream);
                streamWriter.Write(csvBody);
                streamWriter.Flush();
                memoryStream.Position = 0;
                string fn = System.IO.Path.GetFileName(postedFile.FileName);
                MongoProvider.ImportData(fn, memoryStream);

                //context.Response.Write(postedFile.ContentType);


                //// to save in 'App_Data':
                //// string path =  
                ////   HttpContext.Current.Server.MapPath("~/App_Data/");
                //postedFile.SaveAs("C:\\Data\\Junk\\Uploads2\\" + fn);
                //context.Response.Write("Server received " + fn);  //
                context.Response.Write(
                    JsonConvert.SerializeObject(
                    new {
                       success = true
                    })
                );

            }
            catch (Exception ex)
            {
                context.Response.Write("Error occurred on server " +
                  ex.Message);
            }

        } // ProcessRequest

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

    } // class Handler
}