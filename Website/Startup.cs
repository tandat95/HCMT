using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HCMT.Startup))]
namespace HCMT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
