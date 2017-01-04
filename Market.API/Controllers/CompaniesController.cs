using System.Collections.Generic;
using System.Web.Http;

namespace Market.API.Controllers
{
    [RoutePrefix("api/Companies")]
    public class CompaniesController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Company.CreateCompanies());
        }

    }

    #region Helpers

    public class Company
    {
        public int CompanyID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }

        public static List<Company> CreateCompanies()
        {
            List<Company> CompanyList = new List<Company>
            {
                new Company {CompanyID = 10248, Name = "Taiseer Joudeh", City = "Amman" },
                new Company {CompanyID = 10249, Name = "Ahmad Hasan", City = "Dubai" },
                new Company {CompanyID = 10250,Name = "Tamer Yaser", City = "Jeddah" },
                new Company {CompanyID = 10251,Name = "Lina Majed", City = "Abu Dhabi"},
                new Company {CompanyID = 10252,Name = "Yasmeen Rami", City = "Kuwait"}
            };

            return CompanyList;
        }
    }

    #endregion
}