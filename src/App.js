import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './routes/Navbar';
import Home from './routes/Home';
import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Test from './routes/Test';
function App() {
  return (
    
    <div className="App">
      
   <Navbar />
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='test' element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
