import React from 'react';
import Routes from './routes'; 
import Footer from './components/Footer'; 
import Header from './components/Header'; 
import GlobalStyles from "../src/styles/global"; 

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
