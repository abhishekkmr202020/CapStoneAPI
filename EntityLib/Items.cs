using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLib
{
    public class Items: BaseEntity
    {
        public double Price { get; set; }

        public string Detail { get; set; }

        public string ImageUrl { get; set; }
    }
}
