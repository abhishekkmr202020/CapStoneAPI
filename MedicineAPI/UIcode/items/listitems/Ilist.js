  import NavBar from '../../Shared/navbar/NavBar';
  import './Ilist.css';
  import {useState,useEffect} from 'react';
  import {useNavigate} from 'react-router-dom';

  function Ilist()
  {
      const navigate = useNavigate(); 
      const [prod,setProds] = useState([]);
      const userDetails = JSON.parse(localStorage.getItem('user'));
      useEffect(()=>{
      fetch("https://localhost:44389/api/item",{
        //mode:"no-cors",
        //method:"GET",
      }).then(items=>items.json()).then(items=>{setProds(items);});
      },[]);

      function deleteProd(pid)
      {
        fetch('https://localhost:44389/api/item?id='+pid,{
            method:"DELETE",
            headers: {
              
          },
        }).then(()=>console.log(window.location.reload()));
      }

      function NavigateToeditPage(pid)
      {
        localStorage.setItem('rowId', pid)
        navigate('/items/edit/'+pid);
      }

      function navToAddPage()
      {
        navigate('/items/0')
      }
      function navToUserPage()
      {
        navigate('/users')
      }
      return(
  <div>
              <NavBar></NavBar>
              <div  className='container'>
              <button type="button" onClick={navToAddPage} className="btn btn-dark">New Product</button>
              <button type="button" onClick={navToUserPage} className="btn btn-link">View Users</button>
              <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">IMAGE</th>
        <th scope="col">DETAILS</th>
        <th scope="col">PRICE</th>
      </tr>
    </thead>
    <tbody>
        {
          prod.map(prod=>
              <tr>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.imageUrl}</td>
                  <td>{prod.detail}</td>
                  <td>{prod.price}</td>
                  <td>
                      <button className="btn btn-info" onClick={() => NavigateToeditPage(prod.id)}>Edit</button>
                      &nbsp;<button className="btn btn-danger" onClick={() => deleteProd(prod.id)}>Delete</button>
                  </td>
              </tr>
              ) 
        }
    </tbody>
  </table>
  </div>
          </div>

      );
  }

  export default Ilist