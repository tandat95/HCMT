[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(HCMT.App_Start.Combres), "PreStart")]
namespace HCMT.App_Start {
	using System.Web.Routing;
	using global::Combres;
	
    public static class Combres {
        public static void PreStart() {
            RouteTable.Routes.AddCombresRoute("Combres");
        }
    }
}