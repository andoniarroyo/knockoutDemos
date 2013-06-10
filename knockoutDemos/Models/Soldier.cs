namespace knockoutDemos.Models
{
    using System.Collections.Generic;

    /// <summary>
    /// The soldier.
    /// </summary>
    public class Soldier
    {
        #region Public Properties

        /// <summary>
        /// Gets or sets the battalion soldiers.
        /// </summary>
        public ICollection<Soldier> BattalionSoldiers { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the range.
        /// </summary>
        public string Range { get; set; }

        #endregion
    }
}