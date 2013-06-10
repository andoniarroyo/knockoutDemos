namespace knockoutDemos.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;

    using knockoutDemos.Models;

    /// <summary>
    ///     The soldier controller.
    /// </summary>
    public class SoldiersController : ApiController
    {
        #region Public Methods and Operators

        public Soldier Get()
        {
            //Thread.Sleep(5000);
            return new Soldier
                       {
                           Name = "andoni",
                           Range = "soldier",
                           BattalionSoldiers = new List<Soldier>
                                               {
                                                   new Soldier { Name = "anonimous soldier 1", Range = "newbie" },
                                                   new Soldier { Name = "anonimous soldier 2", Range = "newbie" }
                                               }
                       };
        }

        public void Post(Soldier modifiedSoldier)
        {
            
        }

        #endregion
    }
}
