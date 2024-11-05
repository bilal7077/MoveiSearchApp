
import './App.css';
import {HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Singlepage from './Components/Singlepage';


function App() {
  return (
    <HashRouter>
      <Routes>
        
        <Route path="/" element={<Homepage/>}/>
         <Route path="/movie/:imdbID" element={<Singlepage/>}/>
        
      </Routes>
      
    </HashRouter>
    
  );
}

export default App;
