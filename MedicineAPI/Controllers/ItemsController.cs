using DataLibrary;
using EntityLib;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineAPI.Controllers
{
    [ApiController]
    [Route("api/item")]
    public class ItemsController : BaseController<Items>
    {
        public ItemsController(IBaseRepo<Items> repo) : base(repo)
        {

        }
    }
}
