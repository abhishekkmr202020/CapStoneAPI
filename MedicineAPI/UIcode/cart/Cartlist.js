  import './Cartlist.css';
  import {useState,useEffect} from 'react';
  import {useNavigate} from 'react-router-dom';

  function Cartlist()
    {
        const navigate = useNavigate(); 
        const [crt,setCart] = useState([]);
        const urid = JSON.parse(localStorage.getItem('user'));

        function navToListPage()
          {
              navigate('/uitems')
          }

        useEffect(()=>{
        fetch("https://localhost:44389/api/cart/"+urid.id,{
          //mode:"no-cors",
          //method:"GET",
        }).then(citems=>citems.json()).then(citems=>{setCart(citems);});
        },[]);

        return(
    <div>
                <div  className='container'>
                <button type="button" onClick={navToListPage} className="btn btn-link">Back To List</button>
                <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">PRICE</th>
        </tr>
      </thead>
      <tbody>
          {
            crt.map(crt=>
                <tr>
                    <td>{crt.id}</td>
                    <td>{crt.name}</td>
                    <td>{crt.qty}</td>
                    <td>{crt.totalAmount}</td>
                </tr>
                ) 
          }
      </tbody>
    </table>
    </div>
            </div>

        );
    }

    export default Cartlist