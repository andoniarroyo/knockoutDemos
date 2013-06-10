using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace knockoutDemos
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        //    config.Routes.MapHttpRoute(
        //    name: "searchAPI",
        //    routeTemplate: "api/{controller}/{soldierName}",
        //    defaults: new { soldierName = RouteParameter.Optional }
        //);
        }
    }
}
