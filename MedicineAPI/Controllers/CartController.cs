using DataLibrary;
using EntityLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineAPI.Controllers
{
    [ApiController]
    [Route("api/cart")]
    public class CartController : BaseController<Cart>
    {
        public CartController(IBaseRepo<Cart> repo) : base(repo)
        {

        }

        [HttpGet("{OID}")]
        public List<Cart> GetCartitems(int OID)
        {
            List<Cart> st = new List<Cart>();
            string constr = "Server=.; Database=CapStoneDB; Integrated Security=true";
            string query = "SELECT * FROM Cart where OwnerID=" + OID;
            using (SqlConnection con = new SqlConnection(constr))
            {
                using (SqlCommand cmd = new SqlCommand(query))
                {
                    cmd.Connection = con;
                    con.Open();
                    using (SqlDataReader sdr = cmd.ExecuteReader())
                    {
                        while (sdr.Read())
                        {
                            st.Add(new Cart
                            {
                                ID = Convert.ToInt32(sdr["ID"]),
                                NAME = Convert.ToString(sdr["NAME"]),
                                TotalAmount = Convert.ToInt32(sdr["TotalAmount"]),
                                Qty = Convert.ToInt32(sdr["Qty"]),
                                OwnerID = Convert.ToInt32(sdr["OwnerID"])
                        });
                        }
                    }
                    con.Close();
                }
            }
            return st;
        }
    }
}
