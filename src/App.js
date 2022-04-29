import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is header</h1>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
