import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (


    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
