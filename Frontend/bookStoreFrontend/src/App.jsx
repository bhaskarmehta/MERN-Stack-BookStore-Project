import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </>
  )
}

export default App
