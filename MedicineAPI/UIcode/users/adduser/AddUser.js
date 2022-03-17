import './AddUser.css';
import {useNavigate} from 'react-router-dom';

function AddUser(){
    const navigate = useNavigate(); 
    function navToUserPage()
    {
      navigate('/users')
    }

    function submitFormData(event)
    {
        event.preventDefault();

        const name  = event.target.elements[0];
        const email  = event.target.elements[1];
        const pass  = event.target.elements[2];
    
        fetch('https://localhost:44389/api/user',{
            method:"POST",
            headers: {
            'Content-Type': 'application/json'
        },
            body:JSON.stringify({
                name:name.value,
                email:email.value,
                password:pass.value,
                isAdmin:false
            })
        }).then(()=>console.log("Data Submited!!!"));
    }
    return(
<div>

<div className='container'>
<div className='row'>
<div className='col-md-6'>
        <form onSubmit={submitFormData}>
    <div className="mb-3">
    <label className="form-label">NAME</label>
    <input type="text" className="form-control" id="inputName"/>
    </div>
    <div className="mb-3">
    <label className="form-label">EMAIL</label>
    <input type="email" className="form-control" id="inputEmail"/>
    </div>
    <div className="mb-3">
    <label className="form-label">PASSWORD</label>
    <input type="password" className="form-control" id="inputPassword"/>
    </div>
    <button type="submit" className="btn btn-dark">Submit</button>
    <button type="button" onClick={navToUserPage} className="btn btn-link">View Users</button>
</form>
</div>
</div>
</div>
    </div>
    );
}

export default AddUser