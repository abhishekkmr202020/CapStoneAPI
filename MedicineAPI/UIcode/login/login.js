
  import './login.css';
  import {useNavigate} from 'react-router-dom';
  //import NavBar from '../../Shared/navbar/NavBar';

  function Login() {
      function submitLoginData(event)
      {
          //"user1@testusr.com admin2@testusr.com Password1
          event.preventDefault();
        const email  = event.target.elements[0];
        const password  = event.target.elements[1];

        fetch('https://localhost:44389/api/user/login',{   
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
              email:email.value,
              password:password.value
            })
        }).then(res=>res.json()).then(res=>localStorage.setItem('user', JSON.stringify(res))).then(navToListPage());
      }
      const navigate = useNavigate(); 
      function navToListPage()
      {
        const userDetails = JSON.parse(localStorage.getItem('user'));
        {
          (!userDetails.isAdmin)? navigate('/uitems'):navigate('/items')
        }
      }

      function navToRegisterPage()
      {
        navigate('/register')
      }

      return(
          <div>
        <div className='container'>
            <div className='row'>
              <div className='col-md-9'></div>
              <div className='col-md-3'>
                  <form onSubmit={submitLoginData}>
                  <div class="mp3">
                      <label for="email" class="form-label">Email</label>
                      <input id="f1" type="email" class="form-control"/>
                  </div>
                  <div class="mp3">
                      <label for="password" class="form-label">Password</label>
                      <input id="f2" type="password" class="form-control"/>
                  </div>
                      <button id="b1" type="submit" class="btn btn-dark float-end">Submit</button>
                  </form>
                  <button type="button" onClick={navToRegisterPage} className="btn btn-link">Register User</button>
              </div>
            </div>
        </div>
        </div>
      );
  }

  export default Login;