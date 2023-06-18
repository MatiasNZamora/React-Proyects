import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {About} from './components/About';
import {Service} from './components/Service';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Deals} from './components/Deals';
import { Assist } from './components/Assist';
import { Transfers } from './components/Transfers';
import { Insurance } from './components/Insurance';
import { RentBaggage } from './components/RentBaggage';
import { Lockers } from './components/Lockers';


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
        <Route exact path="/deals" element={ <Deals/> } />
        <Route exact path="/assist" element={ <Assist/> } />
        <Route exact path="/transfers" element={ <Transfers/> } />
        <Route exact path="/insurance" element={ <Insurance/> } />
        <Route exact path="/rentbaggage" element={ <RentBaggage/> } />
        <Route exact path="/lockers" element={ <Lockers/> } />
      </Routes>
      <Footer/>
      
    </>
  );
}

export {App};
