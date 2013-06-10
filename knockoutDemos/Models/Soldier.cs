using System.Collections.Generic;

namespace knockoutDemos.Models
{
    public class Soldier
    {
        public string Name { get; set; }

        public string Range { get; set; }

        public ICollection<Soldier> BattalionSoldiers { get; set; }
    }
}