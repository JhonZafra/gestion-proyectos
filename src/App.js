import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import './styles/styles.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Index />}/>
          <Route path='/contacto' element= {<Contacto />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
