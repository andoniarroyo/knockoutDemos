// --------------------------------------------------------------------------------------------------------------------
// <copyright file="SearchController.cs" company="">
//   
// </copyright>
// <summary>
//   The soldier controller.
// </summary>
// --------------------------------------------------------------------------------------------------------------------

namespace knockoutDemos.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading;
    using System.Web.Http;

    using knockoutDemos.Models;

    /// <summary>
    ///     The soldier controller.
    /// </summary>
    public class SearchSoldiersController : ApiController
    {
        private static readonly List<Soldier> soldiers = new List<Soldier>
                                                    {
                                                        new Soldier { Name = "andoni" },
                                                        new Soldier { Name = "andoni 2" },
                                                        new Soldier { Name = "conan" },
                                                        new Soldier { Name = "chuck" }
                                                    };

        #region Public Methods and Operators
        
        public List<Soldier> Get(string id)
        {
            Thread.Sleep(3000);
            return soldiers.Where(s => s.Name.Contains(id.ToLower())).ToList();
        }

        #endregion
    }
}
