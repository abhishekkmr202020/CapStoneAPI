import './EditUser.css';
import {useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import NavBar from '../../Shared/navbar/NavBar';

function EditUser(){
    const navigate = useNavigate();
    const rid = localStorage.getItem('urowId');
    const [name1, setName] = useState([]);
    const [email1, setEmail] = useState([]);    
    const [pass1, setPass] = useState([]);
    const [isadm1, setAdmin] = useState([]);

    useEffect(()=>{
    if(rid>0)
    {
    fetch("https://localhost:44389/api/user/id?id="+rid).then(res=>res.json()).then(res=>{
        setName(res.name);
        setEmail(res.email);
        setPass(res.pass);
        setAdmin(res.isAdmin);
    });}
    },[]); 
    function navToUserPage()
    {
      navigate('/users')
    }

    function submitUpdatedFormData(event)
    {
        event.preventDefault();
    
    fetch('https://localhost:44389/api/user',{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            id:rid,
            name:name1,
            email:email1,
            password:pass1,
            isAdmin:isadm1,
        })
    }).then(()=>console.log("Data Updated!!!"));
    }
    return(
<div>
<NavBar></NavBar>
<div className='container'>
<div className='row'>
<div className='col-md-6'>
    <form onSubmit={submitUpdatedFormData}>
<div className="mb-3">
    <label className="form-label">NAME</label>
    <input type="text" value={name1} onChange={e => setName(e.target.value)} className="form-control" id="editName"/>
</div>
<div className="mb-3">
    <label className="form-label">EMAIL</label>
    <input type="text" value={email1} onChange={e => setEmail(e.target.value)} className="form-control" id="editEmail"/>
</div>
<div className="mb-3">
    <label className="form-label">PASSWORD</label>
    <input type="text" value={pass1} onChange={e => setPass(e.target.value)} className="form-control" id="editPassword"/>
</div>

<button type="submit" className="btn btn-dark">Save</button>
<button type="button" onClick={navToUserPage} className="btn btn-link">Back To User List</button>
</form>
</div>
</div>
</div>
    </div>
    );
}

export default EditUser