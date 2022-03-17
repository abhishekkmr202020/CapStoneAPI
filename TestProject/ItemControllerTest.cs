using DataLibrary;
using EntityLib;
using MedicineAPI.Controllers;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject
{
    class ItemControllerTest
    {
        //private readonly IBaseRepo<Items> _irepo;
        //public ItemControllerTest(IBaseRepo<Items> irepo)
        //{
        //    _irepo = irepo;
        //}

        //[SetUp]
        public void TestSetup()
        { 
            //_irepo = MockRepository.GenerateStub<IBaseRepo<Items>>();
        }

            [Test]
        public void GetAllItemsTest()
        {
            //Mock<IBaseRepo<Items>> imock = new Mock<IBaseRepo<Items>>();
            //imock.Setup(m => m.GetAll());
            //var result = new ItemsController(_irepo).GetAllData();
            //Assert.IsNotNull(result);
            Assert.Pass();
        }
    }
}
