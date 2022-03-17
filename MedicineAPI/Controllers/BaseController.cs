using DataLibrary;
using EntityLib;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineAPI.Controllers
{
    public class BaseController<T> : Controller where T : BaseEntity
    {
        private readonly IBaseRepo<T> _repo;

        public BaseController(IBaseRepo<T> repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("id")]
        public IActionResult GetById(int id)
        {
            var val = _repo.Get(id);
            if (val == null)
            {
                return NotFound();
            }

            return Ok(val);
        }

        [HttpPost]
        public IActionResult Create(T obj)
        {
            if (ModelState.IsValid)
            {
                _repo.Add(obj);
            }
            return Ok(obj);
        }

        [HttpPut]
        public async Task<IActionResult> Edit(T obj)
        {
            if (ModelState.IsValid)
            {
                _repo.Update(obj);
            }
            return Ok(obj);
        }

        [HttpDelete]
        public IActionResult Remove(int id)
        {
            _repo.Delete(id);
            return Ok();
        }
    }
}
