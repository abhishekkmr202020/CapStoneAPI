import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './login/login';
import Register from './login/Registeruser';
import Plist from './items/listitems/Ilist';
import Ulist from './items/listitems/UserIlist';
import AddProd from './items/additems/AddProd';
import EditProd from './items/edititems/EditProd';
import Usrlist from './users/listusers/Ulist';
import UsrAdd from './users/adduser/AddUser';
import UsrEdit from './users/edituser/EditUser';
import Cartlist from './cart/Cartlist';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/items" element={<Plist/>}></Route>
        <Route path="/items/:id" element={<AddProd/>}></Route>
        <Route path='/items/edit/:id' element={<EditProd/>}></Route>
        <Route path="/uitems" element={<Ulist/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/users" element={<Usrlist/>}></Route>
        <Route path="/users/:id" element={<UsrAdd/>}></Route>
        <Route path="/users/edit/:id" element={<UsrEdit/>}></Route>
        <Route path="/cart/:id" element={<Cartlist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
