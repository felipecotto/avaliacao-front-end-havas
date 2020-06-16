import React from 'react';
import Routes from './routes'; 
import Footer from './components/Footer'; 
import Header from './components/Header'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
