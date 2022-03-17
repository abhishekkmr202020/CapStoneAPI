using EntityLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary
{
    public interface IBaseRepo<T> where T : BaseEntity
    {
        public IEnumerable<T> GetAll();
        public T Get(int id);
        public void Add(T obj);
        public void Update(T obj);
        public void Delete(int id);
        public bool Exists(int id);
    }
}
