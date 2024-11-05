
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Singlepage from './Components/Singlepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Homepage/>}/>
         <Route path="/movie/:imdbID" element={<Singlepage/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
