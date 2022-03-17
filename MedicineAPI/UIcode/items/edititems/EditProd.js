    import './EditProd.css';
    import {useNavigate} from 'react-router-dom';
    import {useState,useEffect} from 'react';
    import NavBar from '../../Shared/navbar/NavBar';

    function EditProd(){
        const navigate = useNavigate();
        const rid = localStorage.getItem('rowId');
        const [name1, setName] = useState([]);
        const [detail1, setDetail] = useState([]);    
        const [imgSrc1, setImgSrc] = useState([]);
        const [price1, setPrice] = useState([]);
        
        useEffect(()=>{
        if(rid>0)
        {
        fetch("https://localhost:44389/api/item/id?id="+rid).then(res=>res.json()).then(res=>{
            setName(res.name);
            setDetail(res.detail);
            setImgSrc(res.imageUrl);
            setPrice(res.price);
        });}
        },[]); 
        function navToListPage()
        {
        navigate('/items')
        }
    
        function submitUpdatedFormData(event)
        {
            event.preventDefault();
        
        fetch('https://localhost:44389/api/item',{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                id:rid,
                name:name1,
                detail:detail1,
                price:price1,
                imageUrl:imgSrc1
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
        <label className="form-label">IMAGE</label>
        <input type="text" value={imgSrc1} onChange={e => setImgSrc(e.target.value)} className="form-control" id="editImage"/>
    </div>
    <div className="mb-3">
        <label className="form-label">DETAIL</label>
        <input type="text" value={detail1} onChange={e => setDetail(e.target.value)} className="form-control" id="editDetail"/>
    </div>
    <div className="mb-3">
        <label className="form-label">PRICE</label>
        <input type="text" value={price1} onChange={e => setPrice(e.target.value)} className="form-control" id="editPrice"/>
    </div>
    <button type="submit" className="btn btn-dark">Save</button>
    <button type="button" onClick={navToListPage} className="btn btn-link">Back To List</button>
    </form>
    </div>
    </div>
    </div>
        </div>
        );
    }
    
    export default EditProd