using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLib
{
    public class Cart: BaseEntity
    {
        public int OwnerID { get; set; }

        public float TotalAmount { get; set; }

        public int Qty { get; set; }
    }
}
