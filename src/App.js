import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
