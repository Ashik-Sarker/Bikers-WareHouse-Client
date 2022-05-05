import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import Blogs from './pages/Blogs/Blogs';
import AddNewItem from './pages/Common/AddNewItem/AddNewItem';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import Inventories from './pages/Home/ManageInventory/Inventories/Inventories';
import StockUpdate from './pages/Home/StockUpdate/StockUpdate';
import MyItems from './pages/MyItems/MyItems';
import RequireAuth from './RequireAuth';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items> </Items>}></Route>
        <Route path='/stockupdate/:id' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
