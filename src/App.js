import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from'./Components/Header';
import Footer from'./Components/Footer';
import FormData from './Components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <FormData />
      <Footer />
    </div>
  );
}

export default App;
