import './UserIlist.css';
import NavBar from '../../Shared/navbar/NavBar';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function UserIlist()
  {
      const navigate = useNavigate(); 
      const [prod,setProds] = useState([]);
      const urid = JSON.parse(localStorage.getItem('user'));

      useEffect(()=>{
      fetch("https://localhost:44389/api/item",{
        //mode:"no-cors",
        //method:"GET",
      }).then(items=>items.json()).then(items=>{setProds(items);});
      },[]);

      function NavigateTocartPage()
      {
        navigate('/cart/0');
      }

      function AddTocartPage(pid)
      {
        localStorage.setItem('crowId', pid);

        fetch('https://localhost:44389/api/cart',{
          method:"POST",
          headers: {
          'Content-Type': 'application/json'
      },
          body:JSON.stringify({
              name:pid.name,
              ownerID:urid.id,
              totalAmount:pid.price,
              qty:1
          })
      }).then(()=>console.log("Item added to cart!!!")).then(NavigateTocartPage());
      }

      return(
  <div>
              <NavBar></NavBar>
              <div  className='container'>
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
                      <button className="btn btn-info" onClick={() => AddTocartPage(prod)}>Add to Cart</button>
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

  export default UserIlist