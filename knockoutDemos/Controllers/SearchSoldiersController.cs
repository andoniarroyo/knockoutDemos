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
        #region Static Fields

        /// <summary>
        /// The soldiers.
        /// </summary>
        private static readonly List<Soldier> Soldiers = new List<Soldier>
                                                             {
                                                                 new Soldier { Name = "andoni" }, 
                                                                 new Soldier { Name = "andoni 2" }, 
                                                                 new Soldier { Name = "conan" }, 
                                                                 new Soldier { Name = "chuck" }
                                                             };

        #endregion

        #region Public Methods and Operators

        /// <summary>
        /// The get.
        /// </summary>
        /// <param name="id">
        /// The id.
        /// </param>
        /// <returns>
        /// The <see cref="List"/>.
        /// </returns>
        public List<Soldier> Get(string id)
        {
            return Soldiers.Where(s => s.Name.Contains(id.ToLower())).ToList();
        }

        #endregion
    }
}