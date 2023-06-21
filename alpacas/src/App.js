import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Mainsite } from './components/mainsite';
import { History } from "./components/history";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Mainsite/>}/>
    <Route path="Historia" element={<History/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
