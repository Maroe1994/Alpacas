import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Mainsite } from './components/mainsite';
import { History } from "./components/history";
import { Rules } from "./components/rules";
import {  Politics } from "./components/politic";
import { Parrots } from "./components/parrots";
import { Alpacas } from "./components/alpacas";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Mainsite/>}/>
    <Route path="/Historia" element={<History/>}/>
    <Route path="/Regulamin" element={<Rules/>}/>
    <Route path="/Polityka_prywatności" element={<Politics/>}/>
    <Route path="/Papugi" element={<Parrots/>}/>
    <Route path="/Alpaki" element={<Alpacas/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
