    import './AddProd.css';
    import {useNavigate} from 'react-router-dom';
    import NavBar from '../../Shared/navbar/NavBar';

    function AddProd(){
        const navigate = useNavigate(); 
        function navToListPage()
        {
            navigate('/items')
        }
    
        function submitFormData(event)
        {
            event.preventDefault();
    
            const name  = event.target.elements[0];
            const imageURL  = event.target.elements[1];
            const detail  = event.target.elements[2];
            const price = event.target.elements[3];
           
            fetch('https://localhost:44389/api/item',{
                method:"POST",
                headers: {
                'Content-Type': 'application/json'
            },
                body:JSON.stringify({
                    name:name.value,
                    detail:detail.value,
                    price:price.value,
                    imageUrl:imageURL.value
                })
            }).then(()=>console.log("Data Submited!!!"));
        }
        return(
    <div>
    <NavBar></NavBar>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6'>
            <form onSubmit={submitFormData}>
        <div className="mb-3">
        <label className="form-label">NAME</label>
        <input type="text" className="form-control" id="inputName"/>
        </div>
        <div className="mb-3">
        <label className="form-label">IMAGE</label>
        <input type="text" className="form-control" id="inputImage"/>
        </div>
        <div className="mb-3">
        <label className="form-label">DETAIL</label>
        <input type="text" className="form-control" id="inputDetail"/>
        </div>
        <div className="mb-3">
        <label className="form-label">PRICE</label>
        <input type="text" className="form-control" id="inputPrice"/>
        </div>
        <button type="submit" className="btn btn-dark">Add</button>
        <button type="button" onClick={navToListPage} className="btn btn-link">Back To List</button>
    </form>
    </div>
    </div>
    </div>
        </div>
        );
    }
    
    export default AddProd