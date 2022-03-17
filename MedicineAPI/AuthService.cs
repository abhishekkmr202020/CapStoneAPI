using DataLibrary;
using EntityLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedicineAPI
{
    public class AuthService
    {
        private readonly IBaseRepo<User> UserRepository;
        public AuthService(IBaseRepo<User> UserRepo)
        {
            UserRepository = UserRepo;
        }

        public async Task<User> Authenticate(LoginDto login)
        {
            User result = null;
            if (login.Email!=null && login.Password!=null)
            {

                result = UserRepository.GetAll().Where(u => u.Email == login.Email && u.Password == login.Password).FirstOrDefault();
            }
            
            return result;
        }
    }
}
