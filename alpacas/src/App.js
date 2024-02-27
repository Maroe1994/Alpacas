import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Mainsite } from './components/mainsite';
import { History } from "./components/history";
import { Ruless } from "./components/rules";
import {  Politics } from "./components/politic";
import { Parrots } from "./components/parrots";
import { Alpacas } from "./components/alpacas";
import { Ouroffer } from "./components/ouroffers";
import { Galeries } from "./components/galleries";
import { Contactwithus } from "./components/contact";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Mainsite/>}/>
    <Route path="/Historia" element={<History/>}/>
    <Route path="/Regulamin" element={<Ruless/>}/>
    <Route path="/Polityka_prywatności" element={<Politics/>}/>
    <Route path="/Papugi" element={<Parrots/>}/>
    <Route path="/Alpaki" element={<Alpacas/>}/>
    <Route path="/Nasza_oferta" element={<Ouroffer/>}/>
    <Route path="/Galeria" element={<Galeries/>}/>
    <Route path="/Kontakt" element={<Contactwithus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
