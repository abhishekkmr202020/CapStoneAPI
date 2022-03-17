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
    [Route("api/user")]
    public class UserController : BaseController<User>
    {
        IBaseRepo<User> UserRepo;
        public UserController(IBaseRepo<User> repo) : base(repo)
        {
            UserRepo = repo;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser([FromBody]LoginDto login)
        {
            if (this.ModelState.IsValid)
            {
                AuthService authService = new AuthService(UserRepo);
                User response = await authService.Authenticate(login).ConfigureAwait(true);
                if (response != null)
                {
                    return this.Ok(response);
                }
                else
                {
                    return this.BadRequest(new { error = "invalid_grant", error_description = "Invalid Credentials" });
                }
            }

            return this.BadRequest();
        }

    }
}
