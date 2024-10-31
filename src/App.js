import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Footer from './components/Footer';
function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Table/>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
