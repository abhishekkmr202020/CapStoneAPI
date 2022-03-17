import './Ulist.css';
import NavBar from '../../Shared/navbar/NavBar';
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Ulist()
  {
      const navigate = useNavigate(); 
      const [usr,setUsers] = useState([]);
      
      useEffect(()=>{
      fetch("https://localhost:44389/api/user",{
        //mode:"no-cors",
        //method:"GET",
      }).then(users=>users.json()).then(users=>{setUsers(users);});
      },[]);

      function deleteUser(pid)
      {
        fetch('https://localhost:44389/api/user?id='+pid,{
            method:"DELETE",
            headers: {
              
          },
        }).then(()=>console.log(window.location.reload()));
      }

      function NavigateToeditPage(pid)
      {
        localStorage.setItem('urowId', pid)
        navigate('/users/edit/'+pid);
      }

      function navToAddPage()
      {
        navigate('/users/0')
      }
      function navToListPage()
      {
        navigate('/items')
      }
      return(
  <div>
              <NavBar></NavBar>
              <div  className='container'>
              <button type="button" onClick={navToAddPage} className="btn btn-dark">New User</button>
              <button type="button" onClick={navToListPage} className="btn btn-link">View Items</button>
              <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">IsAdmin</th>
      </tr>
    </thead>
    <tbody>
        {
          usr.map(usr=>
              <tr>
                  <td>{usr.id}</td>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.isAdmin}</td>
                  <td>
                      <button className="btn btn-info" onClick={() => NavigateToeditPage(usr.id)}>Edit</button>
                      &nbsp;<button className="btn btn-danger" onClick={() => deleteUser(usr.id)}>Delete</button>
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

  export default Ulist