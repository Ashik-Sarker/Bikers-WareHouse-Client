import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login/Login';
import Registration from './pages/Authentication/Registration/Registration';
import Footer from './pages/Common/Footer/Footer';
import Header from './pages/Common/Header/Header';
import Home from './pages/Home/Home/Home';
import Items from './pages/Home/Items/Items';
import StockUpdate from './pages/Home/StockUpdate/StockUpdate';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items> </Items>}></Route>
        <Route path='/stockupdate/:id' element={<StockUpdate></StockUpdate>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
