import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';



const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/home" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/service" element={ <Service/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/register" element={ <Register/> } />
        <Route exact path="/dashboard" element={ <Dashboard/> } />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
