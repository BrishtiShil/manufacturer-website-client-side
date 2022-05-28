import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Parchase from './Parchase/Parchase';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Portfolio/MyPortfolio';
import Dashboard from './Dashboard/Dashboard';
import MyOrder from './Dashboard/MyOrder';
import MyReview from './Dashboard/MyReview';
import MyProfile from './Dashboard/MyProfile';
import ManageOrder from './Dashboard/ManageOrder';
import ManageProduct from './Dashboard/ManageProduct';
import MakeAdmin from './Dashboard/MakeAdmin';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/parchase" element={
          <RequireAuth>
            <Parchase></Parchase>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
